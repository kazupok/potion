import { getClassNameBlockId } from "potion-core/helpers";
import React, { FC } from "react";
import type { LinkPreviewBlockProps } from "../../../../types/blocks-types";
import { LinkTo } from "../../common/LinkTo";
import "./styles.css";

export const LinkPreview: FC<LinkPreviewBlockProps> = ({ blockObject }) => {
  const url = new URL(blockObject.link_preview.url);

  return (
    <LinkTo
      url={url.toString()}
      className={`${getClassNameBlockId(blockObject)} ptn-blk-blocks-link-preview`}
    />
  );
};
