import type { BlockObject } from "potion-core";
import type { ReactNode } from "react";
import type {
  BlockComponentMap,
  ComponentType,
} from "../../types/blocks-types";

// renderBlockの実装
export const RenderBlock = ({
  blocks,
  blockComponentMap,
}: {
  blocks: BlockObject[];
  blockComponentMap: BlockComponentMap;
}): ReactNode => {
  return blocks.map((block) => {
    const Component = blockComponentMap[block.type] as ComponentType<
      typeof block
    >;

    if (!Component) {
      return null;
    }

    return (
      <Component
        key={block.id}
        block={block}
        blockComponentMap={blockComponentMap}
      />
    );
  });
};
