import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const AboutPage: React.FC<PageProps> = () => (
  <Layout pageTitle="About Me" active="About">
    <p>
      I Write Software @{' '}
      <a href="https://miro.com/" target="_blank">
        Miro
      </a>
    </p>
    <p>I'm interested in Graph Databases, Recommender Systems, and Functional Programming.</p>
  </Layout>
);

export default AboutPage;

export const Head: HeadFC = () => <SEO title="About Page" />;
