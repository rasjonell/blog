import * as React from 'react';
import { HeadFC, PageProps, Link, Page } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="" active="Home">
      <p>Welcome to my home on the Web!</p>
      <ol className="style_1">
        <li>
          <Link to="/feed">Feed</Link>
          <br />
          <small>
            Here you can find everything I published.
            <br />
            (tweets, toots, blog posts, etc.)
          </small>
        </li>
        <li>
          <Link to="/blog">Personal Blog</Link>
          <br />
          <small>Here you can find my articles.</small>
        </li>
        <li>
          <Link to="https://github.com/rasjonell">Github</Link>
          <br />
          <small>
            Check out my open source projects.
            <br />
            (Mostly Elixir, Typescript, and Graph Databases)
          </small>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/gurgenhayrapetyan/">LinkedIn</Link>
          <br />
          <small>
            Connect with me via LinkedIn.
            <br />
            (Interested in Full-Stack Web Development and ReactNative related projects)
          </small>
        </li>
        <li>
          <Link to="https://xn--69aa8bzb.xn--y9a3aq/@gurgen">Fediverse</Link>
          <br />
          <small>Connect with me in the Fediverse.</small>
        </li>
        <li>
          <Link to="https://twitter.com/gnu_rasjonell">Twitter</Link>
          <br />
          <small>Connect with me via Twitter.</small>
        </li>
        <li>
          <Link to="mailto:info.gurgen@gmail.com">Email</Link>
          <br />
          <small>E-Mail me at: info.gurgen@gmail.com</small>
        </li>
      </ol>
    </Layout>
  );
};

export const Head: HeadFC = () => <SEO title="Home Page" />;

export default IndexPage;
