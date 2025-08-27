import { getClassNameBlockId } from "potion-core";
import type { FC } from "react";
import type { LinkToPageBlockProps } from "../../../types/blocks-types";

export const LinkToPage: FC<LinkToPageBlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  const { commonComponents } = blockComponentMap;
  const pageId =
    blockObject.link_to_page.type === "page_id"
      ? blockObject.link_to_page.page_id
      : null;

  if (!pageId) return <></>;

  return (
    <p
      className={`ptn-blk-blocks-link-to-page ${getClassNameBlockId(blockObject)}`}
    >
      {commonComponents.mention && (
        <commonComponents.mention
          pageId={pageId}
          page={blockObject.Page || undefined}
        />
      )}
    </p>
  );
};
