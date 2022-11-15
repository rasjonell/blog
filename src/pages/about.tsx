import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const AboutPage: React.FC<PageProps> = () => (
  <Layout pageTitle="About Me" active="About">
    <p>
      Yerevan-based Software Engineer Building Web and Mobile Solutions @{' '}
      <a href="https://hearme.app/" target="_blank">
        HearMe
      </a>
    </p>
    <p>I'm interested in Graph Databases, Recommender Systems, and Functional Programming.</p>
  </Layout>
);

export default AboutPage;

export const Head: HeadFC = () => <SEO title="About Page" />;
