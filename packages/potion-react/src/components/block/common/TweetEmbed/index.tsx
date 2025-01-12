"use client";
import React, { FC, useEffect } from "react";
import "./styles.css";

export type TweetEmbedProps = {
  embedUrl: string;
};

export const TweetEmbed: FC<TweetEmbedProps> = ({ embedUrl }) => {
  const url = new URL(embedUrl);
  const postURL =
    url?.hostname === "x.com" || url?.hostname === "www.x.com"
      ? new URL(url.pathname, "https://twitter.com")
      : url;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!postURL) return <></>;

  return (
    <div className="ptn-blk-embed-tweet-container">
      <blockquote className="twitter-tweet">
        {/* biome-ignore lint/a11y/useAnchorContent: <explanation> */}
        <a href={postURL.toString()}></a>
      </blockquote>
    </div>
  );
};
