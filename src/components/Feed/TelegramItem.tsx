import { Link } from 'gatsby';
import * as React from 'react';

function getTelegramContent(content: string): JSX.Element {
  const imageRegexp = /https:\/\/api\.telegram\.org\/file(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/gm;
  const pureContent = content.replace(imageRegexp, '');
  const imageURL = content.match(imageRegexp)?.[0];

  if (imageURL) {
    return (
      <div
        style={{
          display: 'flex',
          margin: '0.5rem 0',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p>{pureContent}</p>
        <img
          src={imageURL}
          style={{
            width: '80%',
          }}
        />
      </div>
    );
  }

  return (
    <p
      style={{
        margin: '0.5rem 0',
      }}
    >
      {content}
    </p>
  );
}

export const TelegramItem = ({
  data,
}: {
  data: Queries.FeedPageQuery['allFeedTelegram']['nodes'][0] & { source: string };
}) => {
  return data.content ? (
    <div key={data.id}>
      {Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(data.pubDate || ''))} on{' '}
      <Link to={data.link || '#'} target="_blank">
        <strong>{data.source}</strong>
      </Link>
      {getTelegramContent(data.content)}
      <hr style={{ margin: '1rem 0 1.5rem 0' }} />
    </div>
  ) : null;
};
