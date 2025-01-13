import { getClassNameBlockId } from "potion-core";
import { FC } from "react";
import type { LinkToPageBlockProps } from "../../../types/blocks-types";
import { MentionPage } from "../common/MentionPage";
export const LinkToPage: FC<LinkToPageBlockProps> = ({ blockObject }) => {
  const pageId =
    blockObject.link_to_page.type === "page_id"
      ? blockObject.link_to_page.page_id
      : null;

  if (!pageId) return <></>;

  return (
    <p
      className={`ptn-blk-blocks-link-to-page ${getClassNameBlockId(blockObject)}`}
    >
      <MentionPage pageId={pageId} page={blockObject.Page || undefined} />
    </p>
  );
};
