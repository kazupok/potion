import React, { FC } from "react";
import "./styles.css";

export type BookmarkCardProps = {
  url: URL;
  metadata: {
    title?: string;
    description?: string;
    image?: string;
  } | null;
};

export const BookmarkCard: FC<BookmarkCardProps> = ({ url, metadata }) => {
  return (
    <div className="ptn-blk-embed-bookmark">
      <a
        href={url.toString()}
        target="_blank"
        rel="noopener noreferrer"
        className="ptn-blk-embed-bookmark-link"
      >
        <div className="ptn-blk-embed-bookmark-content">
          <div className="ptn-blk-embed-bookmark-title">{metadata?.title}</div>
          <div className="ptn-blk-embed-bookmark-description">
            {metadata?.description}
          </div>
          <div className="ptn-blk-embed-bookmark-meta">
            <div className="ptn-blk-embed-bookmark-favicon">
              <img
                src={`https://www.google.com/s2/favicons?domain=${url.hostname}`}
                alt="Favicon of the bookmark site"
                loading="lazy"
                className="ptn-blk-embed-bookmark-favicon-img"
              />
            </div>
            <div className="ptn-blk-embed-bookmark-url">{url.origin}</div>
          </div>
        </div>
        <div className="ptn-blk-embed-bookmark-image">
          {metadata?.image && (
            <img
              src={metadata.image}
              alt="Site image of the bookmark"
              loading="lazy"
              className="ptn-blk-embed-bookmark-img"
            />
          )}
        </div>
      </a>
    </div>
  );
};
