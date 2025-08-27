import { getClassNameBlockId } from "potion-core";
import type { FC } from "react";
import type { BookmarkBlockProps } from "../../../types/blocks-types";
import { BookmarkCard } from "../common/BookmarkCard";
import { LinkTo } from "../common/LinkTo";

export const Bookmark: FC<BookmarkBlockProps> = ({
  blockObject,
  blockComponentMap: _blockComponentMap,
}) => {
  const url = new URL(blockObject.bookmark.url);
  const metadata = blockObject.Metadata;

  return (
    <div
      className={`ptn-blk-blocks-bookmark ${getClassNameBlockId(blockObject)}`}
    >
      {metadata ? (
        <BookmarkCard url={url} metadata={metadata} />
      ) : (
        <LinkTo
          url={url.toString()}
          className={`${getClassNameBlockId(blockObject)}`}
        />
      )}
    </div>
  );
};
