import React from 'react';

import useSiteTitle from '../../graphql/useSiteTitle';

const SEO = ({ title }: { title: string | null | undefined }) => {
  const siteTitle = useSiteTitle();

  return (
    <title>
      {title ? `${title} | ` : null}
      {siteTitle}
    </title>
  );
};

export default SEO;
