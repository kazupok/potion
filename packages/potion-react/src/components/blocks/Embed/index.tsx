import {
  getClassNameBlockId,
  isInstagramURL,
  isTikTokURL,
  isTweetURL,
} from "potion-core/helpers";
import type { EmbedBlockProps } from "../../../types/blocks-types";
import { BookmarkCard } from "./BookmarkCard";
import { InstagramEmbed } from "./InstagramEmbed";
import { TikTokEmbed } from "./TikTokEmbed";
import { TweetEmbed } from "./TweetEmbed";
import "./styles.css";
import { getMetadata } from "potion-core/utils";

export const Embed: EmbedBlockProps = async ({ block }) => {
  const embedUrl = block.embed.url;

  if (!embedUrl) return <></>;

  // Instagram
  if (isInstagramURL(embedUrl)) {
    return (
      <div className={`embed-container ${getClassNameBlockId(block)}`}>
        <InstagramEmbed embedUrl={embedUrl} />
      </div>
    );
  }

  // X(Twitter)
  if (isTweetURL(embedUrl)) {
    return (
      <div className={`embed-container ${getClassNameBlockId(block)}`}>
        <TweetEmbed embedUrl={embedUrl} />
      </div>
    );
  }

  // TikTok
  if (isTikTokURL(embedUrl)) {
    return (
      <div className={`embed-container ${getClassNameBlockId(block)}`}>
        <TikTokEmbed embedUrl={embedUrl} />
      </div>
    );
  }

  // :TODO
  // Pinterest

  // :TODO
  // CodePen

  const url = new URL(embedUrl);
  const metadata = await getMetadata(url);

  return (
    <div className={`embed-container ${getClassNameBlockId(block)}`}>
      <BookmarkCard url={url} metadata={metadata} />
    </div>
  );
};
