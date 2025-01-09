import { getClassNameBlockId, getImagePath } from "potion-core/helpers";
import type { ImageBlockProps } from "../../../types/blocks-types";
import "./styles.css";

export const Image: ImageBlockProps = ({ block }) => {
  const imagePath = getImagePath(block);

  return (
    <figure className={`image-figure ${getClassNameBlockId(block)}`}>
      {imagePath && (
        <div>
          <img
            src={imagePath}
            alt=""
            loading="lazy"
            width={1000}
            height={1000}
            className="image"
          />
          {/* <Caption richTexts={block.Image.Caption} /> */}
        </div>
      )}
    </figure>
  );
};
