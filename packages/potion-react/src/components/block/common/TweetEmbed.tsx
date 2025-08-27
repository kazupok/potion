"use client";
import { type FC, useEffect, useState } from "react";

export type TweetEmbedProps = {
  embedUrl: string;
};

export const TweetEmbed: FC<TweetEmbedProps> = ({ embedUrl }) => {
  // クライアントサイドでのみレンダリングするための状態
  const [isMounted, setIsMounted] = useState(false);
  const [tweetUrl, setTweetUrl] = useState<string | null>(null);

  // コンポーネントがマウントされたらフラグを設定
  useEffect(() => {
    setIsMounted(true);

    // URLを処理
    try {
      const url = new URL(embedUrl);

      // X.comのURLをtwitter.comに変換
      if (url.hostname === "x.com" || url.hostname === "www.x.com") {
        const twitterUrl = new URL(url.pathname, "https://twitter.com");
        setTweetUrl(twitterUrl.toString());
      } else {
        setTweetUrl(url.toString());
      }
    } catch (e) {
      console.error("Invalid Twitter URL:", e);
    }
  }, [embedUrl]);

  // Twitterウィジェットスクリプトを読み込む
  useEffect(() => {
    if (isMounted && tweetUrl) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    }
  }, [isMounted, tweetUrl]);

  // サーバーサイドまたはマウント前、または有効なURLがない場合は何も表示しない
  if (!isMounted || !tweetUrl) {
    return null;
  }

  return (
    <div className="ptn-blk-embed-tweet-container">
      <blockquote className="twitter-tweet">
        <a href={tweetUrl}></a>
      </blockquote>
    </div>
  );
};
