import { Link } from 'gatsby';
import * as React from 'react';

export const MastodonItem = ({
  data,
}: {
  data: Queries.FeedPageQuery['allFeedMastodon']['nodes'][0] & { source: string };
}) => {
  return data.content ? (
    <div key={data.id}>
      {Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(data.pubDate || ''))} on{' '}
      <Link to={data.link || '#'} target="_blank">
        <strong>{data.source}</strong>
      </Link>
      <div
        style={{
          margin: '0.5rem 0',
        }}
        dangerouslySetInnerHTML={{
          __html: data.content || '',
        }}
      />
      <hr style={{ margin: '1rem 0 1.5rem 0' }} />
    </div>
  ) : null;
};
