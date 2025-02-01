import type { BlockComponentMap } from "../types/blocks-types";
import { defaultCommonComponents } from "./defaultCommonComponents";
import { defaultRenderAnnotations } from "./defaultRenderAnnotations";
import { defaultRenderBlocks } from "./defaultRenderBlocks";

type CreateRenderBlocksProps = {
  customBlocks?: Partial<BlockComponentMap["blocks"]>;
  customAnnotations?: Partial<BlockComponentMap["annotations"]>;
  customCommonComponents?: Partial<BlockComponentMap["commonComponents"]>;
};

export function createRenderBlocks(options?: CreateRenderBlocksProps) {
  return {
    blocks: {
      ...defaultRenderBlocks,
      ...options?.customBlocks,
    },
    annotations: {
      ...defaultRenderAnnotations,
      ...options?.customAnnotations,
    },
    commonComponents: {
      ...defaultCommonComponents,
      ...options?.customCommonComponents,
    },
  };
}
