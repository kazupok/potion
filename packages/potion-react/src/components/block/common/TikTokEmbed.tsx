"use client";
import { type FC, useEffect, useState } from "react";

export type TikTokEmbedProps = {
  embedUrl: string;
};

export const TikTokEmbed: FC<TikTokEmbedProps> = ({ embedUrl }) => {
  // クライアントサイドでのみ処理するための状態
  const [isMounted, setIsMounted] = useState(false);
  const [videoData, setVideoData] = useState<{
    user: string;
    videoId: string;
  } | null>(null);

  // コンポーネントがマウントされたらフラグを設定し、URL解析を行う
  useEffect(() => {
    setIsMounted(true);

    try {
      const url = new URL(embedUrl);
      const user = url.pathname.split("/")[1];
      const videoId = url.pathname.split("/")[3];

      if (user && videoId) {
        setVideoData({ user, videoId });
      } else {
        console.error("Invalid TikTok video URL: missing user or video ID");
      }
    } catch (e) {
      console.error("Invalid TikTok URL:", e);
    }
  }, [embedUrl]);

  // TikTok埋め込みスクリプトを読み込む
  useEffect(() => {
    if (isMounted && videoData) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isMounted, videoData]);

  // サーバーサイドまたはマウント前、またはビデオデータがない場合は何も表示しない
  if (!isMounted || !videoData) {
    return null;
  }

  return (
    <div className="ptn-blk-embed-tiktok-container">
      <blockquote
        className="tiktok-embed"
        cite={embedUrl}
        data-video-id={videoData.videoId}
      >
        <section>
          <a
            target="_blank"
            title={videoData.user}
            href={`https://www.tiktok.com/${videoData.user}?refer=embed`}
            rel="noreferrer"
          >
            {videoData.user}
          </a>
        </section>
      </blockquote>
    </div>
  );
};
