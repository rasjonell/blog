import * as React from 'react';
import { graphql, HeadFC, Link, Page, PageProps } from 'gatsby';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
  return (
    <Layout pageTitle="Blog" active="Blog">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={node.frontmatter?.slug || '#'}>{node.frontmatter?.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter?.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export default BlogPage;
export const query = graphql`
  query BlogPage {
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

export const Head: HeadFC = () => <SEO title="Blog" />;
