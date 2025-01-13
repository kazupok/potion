import {
  getClassNameBlockId,
  isInstagramURL,
  isTikTokURL,
  isTweetURL,
} from "potion-core";
import { FC } from "react";
import { EmbedBlockProps } from "../../../types/blocks-types";
import { BookmarkCard } from "../common/BookmarkCard";
import { InstagramEmbed } from "../common/InstagramEmbed";
import { LinkTo } from "../common/LinkTo";
import { TikTokEmbed } from "../common/TikTokEmbed";
import { TweetEmbed } from "../common/TweetEmbed";

export const Embed: FC<EmbedBlockProps> = ({ blockObject }) => {
  const embedUrl = blockObject.embed.url;

  if (!embedUrl) return <></>;

  // Instagram
  if (isInstagramURL(embedUrl)) {
    return (
      <div
        className={`ptn-blk-blocks-embed ${getClassNameBlockId(blockObject)}`}
      >
        <InstagramEmbed embedUrl={embedUrl} />
      </div>
    );
  }

  // X(Twitter)
  if (isTweetURL(embedUrl)) {
    return (
      <div
        className={`ptn-blk-blocks-embed ${getClassNameBlockId(blockObject)}`}
      >
        <TweetEmbed embedUrl={embedUrl} />
      </div>
    );
  }

  // TikTok
  if (isTikTokURL(embedUrl)) {
    return (
      <div
        className={`ptn-blk-blocks-embed ${getClassNameBlockId(blockObject)}`}
      >
        <TikTokEmbed embedUrl={embedUrl} />
      </div>
    );
  }

  // :TODO
  // Pinterest

  // :TODO
  // CodePen

  const url = new URL(embedUrl);
  const metadata = blockObject.Metadata;
  if (!metadata) return <LinkTo url={embedUrl} />;

  return (
    <div className={`ptn-blk-blocks-embed ${getClassNameBlockId(blockObject)}`}>
      <BookmarkCard url={url} metadata={metadata} />
    </div>
  );
};
