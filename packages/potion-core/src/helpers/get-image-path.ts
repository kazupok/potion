import type { ImageBlockObject } from "../types/blocks-types.js";

export const getImagePath = (block: ImageBlockObject) => {
  if (block.image.type === "external") {
    return block.image.external.url;
  }

  return block.image.file.url;
};
