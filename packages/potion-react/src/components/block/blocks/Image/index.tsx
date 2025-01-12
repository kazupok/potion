import { getClassNameBlockId, getImagePath } from "potion-core/helpers";
import React, { FC } from "react";
import { ImageBlockProps } from "../../../../types/blocks-types";
import "./styles.css";

export const Image: FC<ImageBlockProps> = ({ blockObject }) => {
  const imagePath = getImagePath(blockObject);

  return (
    <figure
      className={`ptn-blk-blocks-image-figure ${getClassNameBlockId(blockObject)}`}
    >
      {imagePath && (
        <div>
          <img
            src={imagePath}
            alt=""
            loading="lazy"
            width={1000}
            height={1000}
            className="ptn-blk-blocks-image"
          />
          {/** TODO: */}
          {/* <Caption richTexts={block.Image.Caption} /> */}
        </div>
      )}
    </figure>
  );
};
