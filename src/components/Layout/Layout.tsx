import { Link } from 'gatsby';
import React, { PropsWithChildren } from 'react';

import * as styles from './style.module.css';
import useSiteTitle from '../../graphql/useSiteTitle';

type LayoutProps = PropsWithChildren<{
  active: string;
  pageTitle: string | null | undefined;
}>;

const Layout: React.FC<LayoutProps> = ({ pageTitle, active, children }) => {
  const siteTitle = useSiteTitle();

  const isActive = (tab: string): boolean => active === tab;

  return (
    <div className={styles.container}>
      <header className={styles.siteTitle}>{siteTitle}</header>
      <nav>
        <ul className={styles.navLinks}>
          <li className={`${styles.navLinkItem} ${isActive('Home') && styles.active}`}>
            <Link to="/" className={styles.navLinkText}>
              Home
            </Link>
          </li>
          <li className={`${styles.navLinkItem} ${isActive('Feed') && styles.active}`}>
            <Link to="/feed" className={styles.navLinkText}>
              Feed
            </Link>
          </li>
          <li className={`${styles.navLinkItem} ${isActive('Blog') && styles.active}`}>
            <Link to="/blog" className={styles.navLinkText}>
              Blog
            </Link>
          </li>
          <li className={`${styles.navLinkItem} ${isActive('About') && styles.active}`}>
            <Link to="/about" className={styles.navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
