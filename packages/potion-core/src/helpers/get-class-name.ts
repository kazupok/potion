import type { BlockObject } from "../types/blocks-types";

export const getClassNameBlockId = (block: BlockObject) => {
  return `notion-block-${block.id}`;
};
