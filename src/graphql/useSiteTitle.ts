import { graphql, useStaticQuery } from 'gatsby';

const GetSiteMetadata = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default (): string => {
  const data = useStaticQuery(GetSiteMetadata);

  return data.site.siteMetadata.title as string;
};
