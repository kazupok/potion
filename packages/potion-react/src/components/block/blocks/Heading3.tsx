import {
  getClassNameBlockId,
  getHeadingId,
  isToggleableHeading,
} from "potion-core";
import type { FC } from "react";
import type { Heading3BlockProps } from "../../../types/blocks-types";
import { RenderBlock } from "../common/RenderBlock";
export const Heading3: FC<Heading3BlockProps> = ({
  blockObject,
  blockComponentMap,
}) => {
  const headingId = getHeadingId(blockObject);
  const { annotations } = blockComponentMap;

  if (isToggleableHeading(blockObject)) {
    return (
      <details
        className={`ptn-blk-blocks-heading3-container ${getClassNameBlockId(blockObject)}`}
      >
        <summary className="ptn-blk-blocks-heading3 ptn-blk-blocks-heading-toggle">
          <a
            href={`#${headingId}`}
            id={headingId}
            className="ptn-blk-blocks-heading-link"
          >
            <h3 className={getClassNameBlockId(blockObject)}>
              {blockObject.heading_3.rich_text.map(
                (richText, index) =>
                  annotations.rich_text && (
                    <annotations.rich_text
                      key={index}
                      richText={richText}
                      blockComponentMap={blockComponentMap}
                    />
                  ),
              )}
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
      <h5
        className={`ptn-blk-blocks-heading3 ptn-blk-blocks-heading3-container ${getClassNameBlockId(blockObject)}`}
      >
        {blockObject.heading_3.rich_text.map(
          (richText, index) =>
            annotations.rich_text && (
              <annotations.rich_text
                key={index}
                richText={richText}
                blockComponentMap={blockComponentMap}
              />
            ),
        )}
      </h5>
    </a>
  );
};
