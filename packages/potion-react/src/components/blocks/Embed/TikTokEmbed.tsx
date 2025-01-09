"use client";
import { cn } from "@/lib/shadcn/utils";
import { type FC, useEffect } from "react";

interface TikTokEmbedProps {
  embedUrl: string;
}

export const TikTokEmbed: FC<TikTokEmbedProps> = ({ embedUrl }) => {
  const url = new URL(embedUrl);

  const user = url.pathname.split("/")[1];
  const videoId = url.pathname.split("/")[3];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!user || !videoId) return <></>;

  return (
    <div className="max-w-[325px] overflow-x-auto rounded-sm">
      <blockquote
        className={cn("tiktok-embed")}
        cite={url.toString()}
        data-video-id={videoId}
      >
        <section>
          <a
            target="_blank"
            title={user}
            href="https://www.tiktok.com/{user}?refer=embed"
            rel="noreferrer"
          >
            {user}
          </a>
        </section>
      </blockquote>
    </div>
  );
};
