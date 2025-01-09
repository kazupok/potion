import "./Bookmark.css";
import { getClassNameBlockId } from "potion-core/helpers";
import { type Metadata, getMetadata } from "potion-core/utils";
import type { BookmarkBlockProps } from "../../../types/blocks-types";
import { BookmarkCard } from "../Embed/BookmarkCard";

export const Bookmark: BookmarkBlockProps = async ({
  block,
  blockComponentMap: _blockComponentMap,
}) => {
  let url: URL | null = null;
  let metadata: Metadata | null = null;

  try {
    url = new URL(block.bookmark.url);
    metadata = await getMetadata(url);
  } catch (err) {
    console.error("URL parsing error:", err);
    return null;
  }

  if (!url) return null;

  return (
    <div className={`bookmark-block ${getClassNameBlockId(block)}`}>
      <BookmarkCard url={url} metadata={metadata} />
    </div>
  );
};
