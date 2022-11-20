import * as React from 'react';
import { graphql, HeadFC, PageProps, Link } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const FeedPage: React.FC<PageProps<Queries.FeedPageQuery>> = ({ data }) => {
  // const mastodon = data.allFeedMastodon.nodes.map((node) => ({
  //   ...node,
  //   source: 'Mastodon',
  //   pubDate: new Date(node.pubDate || ''),
  // }));

  const mixedContent = [
    // ...mastodon,
    ...data.allMdx.nodes.map((post) => ({
      id: post.id,
      source: 'Personal Blog',
      link: `/blog/${post.frontmatter?.slug}`,
      pubDate: new Date(post.frontmatter?.date || ''),
      contentSnippet: `${post.frontmatter?.title} - ${post.excerpt}`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return (
    <Layout pageTitle="Feed" active="Feed">
      <p style={{ marginBottom: '1.5rem' }}>
        Here you can find <strong>everything</strong> I published on the WWW!
        <hr />
      </p>
      <section>
        {mixedContent.map((post) => (
          <div key={post.id}>
            <Link to={post.link || '#'} target="_blank">
              {Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(post.pubDate)} on{' '}
              {post.source}
            </Link>
            <p style={{ margin: '0.5rem 0' }}>{post.contentSnippet}</p>
            <hr style={{ margin: '1rem 0 1.5rem 0' }} />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export const Head: HeadFC = () => <SEO title="Feed" />;

export const query = graphql`
  query FeedPage {
    # allFeedMastodon {
    #   nodes {
    #     id
    #     link
    #     pubDate
    #     contentSnippet
    #   }
    # }
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
