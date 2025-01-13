import {
  getClassNameBlockId,
  getHeadingId,
  isToggleableHeading,
} from "potion-core";
import { FC } from "react";
import { Heading1BlockProps } from "../../../types/blocks-types";
import { RichText } from "../annotations";
import { RenderBlock } from "../common/RenderBlock";
export const Heading1: FC<Heading1BlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  const headingId = getHeadingId(blockObject);

  if (isToggleableHeading(blockObject)) {
    return (
      <details
        className={`ptn-blk-blocks-heading1-container ${getClassNameBlockId(blockObject)}`}
      >
        <summary className="ptn-blk-blocks-heading1 ptn-blk-blocks-heading-toggle">
          <a
            href={`#${headingId}`}
            id={headingId}
            className="ptn-blk-blocks-heading-link"
          >
            <h3 className={getClassNameBlockId(blockObject)}>
              {blockObject.heading_1.rich_text.map((richText, index) => (
                <RichText key={index} richText={richText} />
              ))}
            </h3>
          </a>
        </summary>
        <div className="ptn-blk-blocks-heading-toggle-content">
          {blockObject.Children && (
            <RenderBlock
              blockObjects={blockObject.Children}
              blockComponentMap={blockComponentMap}
            />
          )}
        </div>
      </details>
    );
  }

  return (
    <a href={`#${headingId}`} id={headingId}>
      <h3
        className={`ptn-blk-blocks-heading1 ptn-blk-blocks-heading1-container ${getClassNameBlockId(blockObject)}`}
      >
        {blockObject.heading_1.rich_text.map((richText, index) => (
          <RichText key={index} richText={richText} />
        ))}
      </h3>
    </a>
  );
};
