import type { BlockComponentMap } from "../types/blocks-types";
import { defaultRenderBlocks } from "./defaultRenderBlocks";

type CreateRenderBlocksProps = {
  customBlocks?: Partial<BlockComponentMap["blocks"]>;
};

export function createRenderBlocks(options?: CreateRenderBlocksProps) {
  return {
    blocks: {
      ...defaultRenderBlocks,
      ...options?.customBlocks,
    },
  };
}
