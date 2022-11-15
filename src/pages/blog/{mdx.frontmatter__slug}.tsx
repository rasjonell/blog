import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

const BlogPost = ({ data, children }: PageProps<Queries.BlogPostQuery>) => {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title} active="Blog">
      <p>{data.mdx?.frontmatter?.date}</p>
      {children}
    </Layout>
  );
};

export const Head = ({ data }: PageProps<Queries.BlogPostQuery>) => (
  <SEO title={data.mdx?.frontmatter?.title} />
);

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export default BlogPost;
