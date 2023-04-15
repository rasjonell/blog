import { Link } from 'gatsby';
import * as React from 'react';

export const BlogItem = ({
  data,
}: {
  data: Queries.FeedPageQuery['allFeedTelegram']['nodes'][0] & { source: string };
}) => {
  return (
    <div key={data.id}>
      {Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(data.pubDate || ''))} on{' '}
      <Link to={data.link || '#'} target="_blank">
        <strong>{data.source}</strong>
      </Link>
      <p
        style={{
          margin: '0.5rem 0',
        }}
      >
        {data.content}
      </p>
      <hr style={{ margin: '1rem 0 1.5rem 0' }} />
    </div>
  );
};
