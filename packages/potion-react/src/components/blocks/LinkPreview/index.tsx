import { getClassNameBlockId } from "potion-core/helpers";
import type { LinkPreviewBlockProps } from "../../../types/blocks-types";
import "./styles.css";

export const LinkPreview: LinkPreviewBlockProps = ({ block }) => {
  return (
    <a
      href={block.link_preview.url}
      className={`link-preview ${getClassNameBlockId(block)}`}
    >
      {block.link_preview.url}
    </a>
  );
};
