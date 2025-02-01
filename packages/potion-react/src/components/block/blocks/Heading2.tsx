import {
  getClassNameBlockId,
  getHeadingId,
  isToggleableHeading,
} from "potion-core";
import { FC } from "react";
import { Heading2BlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../common/RenderBlock";

export const Heading2: FC<Heading2BlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  const headingId = getHeadingId(blockObject);
  const { annotations } = blockComponentMap;

  if (isToggleableHeading(blockObject)) {
    return (
      <details
        className={`ptn-blk-blocks-heading2-container ${getClassNameBlockId(blockObject)}`}
      >
        <summary className="ptn-blk-blocks-heading2 ptn-blk-blocks-heading-toggle">
          <a
            href={`#${headingId}`}
            id={headingId}
            className="ptn-blk-blocks-heading-link"
          >
            <h4 className={getClassNameBlockId(blockObject)}>
              {blockObject.heading_2.rich_text.map(
                (richText, index) =>
                  annotations.rich_text && (
                    <annotations.rich_text
                      key={index}
                      richText={richText}
                      blockComponentMap={blockComponentMap}
                    />
                  ),
              )}
            </h4>
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
      <h4
        className={`ptn-blk-blocks-heading2 ptn-blk-blocks-heading2-container ${getClassNameBlockId(blockObject)}`}
      >
        {blockObject.heading_2.rich_text.map(
          (richText, index) =>
            annotations.rich_text && (
              <annotations.rich_text
                key={index}
                richText={richText}
                blockComponentMap={blockComponentMap}
              />
            ),
        )}
      </h4>
    </a>
  );
};
