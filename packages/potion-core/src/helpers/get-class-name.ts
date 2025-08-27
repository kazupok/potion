import type { BlockObject } from "../types/blocks-types.js";

export const getClassNameBlockId = (block: BlockObject) => {
  return `notion-block-${block.id}`;
};
