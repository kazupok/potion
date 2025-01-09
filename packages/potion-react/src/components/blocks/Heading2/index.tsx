import { getClassNameBlockId, getHeadingId } from "potion-core/helpers";
import type { Heading2BlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../../common/RenderBlock";
import "./styles.css";
import { RichTextRenderer } from "../Paragraph/RichTextRenderer";

export const Heading2: Heading2BlockProps = ({ block, blockComponentMap }) => {
  const isToggleable = block.heading_2.is_toggleable;
  const headingId = getHeadingId(block);

  if (isToggleable && block.Children) {
    return (
      <details className={`heading-2-container ${getClassNameBlockId(block)}`}>
        <summary className="heading-2 heading-toggle">
          <a href={`#${headingId}`} id={headingId} className="heading-link">
            <h4 className={getClassNameBlockId(block)}>
              {block.heading_2.rich_text.map((richText, index) => (
                <RichTextRenderer key={index} richText={richText} />
              ))}
            </h4>
          </a>
        </summary>
        <div className="heading-toggle-content">
          {block.Children && (
            <RenderBlock
              blocks={block.Children}
              blockComponentMap={blockComponentMap}
            />
          )}
        </div>
      </details>
    );
  }

  return (
    <a href={`#${headingId}`} id={headingId}>
      <h4
        className={`heading-2 heading-2-container ${getClassNameBlockId(block)}`}
      >
        {block.heading_2.rich_text.map((richText, index) => (
          <RichTextRenderer key={index} richText={richText} />
        ))}
      </h4>
    </a>
  );
};
