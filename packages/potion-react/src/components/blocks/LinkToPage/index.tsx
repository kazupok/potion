import { getClassNameBlockId } from "potion-core/helpers";
import type { LinkToPageBlockProps } from "../../../types/blocks-types";
import "./styles.css";
import { Mention } from "../Paragraph/Mention";

export const LinkToPage: LinkToPageBlockProps = ({ block }) => {
  const pageId =
    block.link_to_page.type === "page_id" ? block.link_to_page.page_id : null;

  if (!pageId) return <></>;

  return (
    <p className={`link-to-page ${getClassNameBlockId(block)}`}>
      <Mention pageId={pageId} />
    </p>
  );
};
