import * as React from 'react';
import { graphql, HeadFC, PageProps, Link } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { BlogItem } from '../components/Feed/BlogItem';
import { MastodonItem } from '../components/Feed/MastodonItem';
import { TelegramItem } from '../components/Feed/TelegramItem';

const FeedPage: React.FC<PageProps<Queries.FeedPageQuery>> = ({ data }) => {
  const mastodon = data.allFeedMastodon.nodes.map((node) => ({
    ...node,
    source: 'Mastodon',
    pubDate: new Date(node.pubDate || '').toString(),
  }));

  const telegram = data.allFeedTelegram.nodes.map((node) => ({
    ...node,
    source: 'Telegram',
    pubDate: new Date(node.pubDate || '').toString(),
  }));

  const mixedContent = [
    ...mastodon,
    ...telegram,
    ...data.allMdx.nodes.map((post) => ({
      id: post.id,
      source: 'Personal Blog',
      link: `/blog/${post.frontmatter?.slug}`,
      pubDate: new Date(post.frontmatter?.date || '').toString(),
      content: `${post.frontmatter?.title} - ${post.excerpt}`,
    })),
  ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return (
    <Layout pageTitle="Feed" active="Feed">
      <p style={{ marginBottom: '1.5rem' }}>
        Here you can find <strong>everything</strong> I published on the World Wide Web!
        <hr />
      </p>
      <section>
        {mixedContent.map((post) => {
          if (post.source === 'Personal Blog') {
            return <BlogItem data={post} />;
          }

          if (post.source === 'Mastodon') {
            return <MastodonItem data={post} />;
          }

          return <TelegramItem data={post} />;
        })}
      </section>
    </Layout>
  );
};

export const Head: HeadFC = () => <SEO title="Feed" />;

export const query = graphql`
  query FeedPage {
    allFeedMastodon(limit: 50) {
      nodes {
        id
        link
        pubDate
        content
      }
    }

    allFeedTelegram(limit: 50) {
      nodes {
        id
        link
        pubDate
        content
      }
    }

    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export default FeedPage;
