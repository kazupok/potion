import type { BlockObject } from "potion-core";
import type { FC } from "react";
import type { BlockComponentMap, BlockProps } from "../../../types";
export type RenderBlockProps = {
  blockObjects: BlockObject[];
  blockComponentMap: BlockComponentMap;
};

// renderBlockの実装
export const RenderBlock: FC<RenderBlockProps> = ({
  blockObjects,
  blockComponentMap,
}) => {
  return (
    <>
      {blockObjects.map((blockObject) => {
        const type = blockObject.type as keyof BlockComponentMap["blocks"];
        const Component = blockComponentMap.blocks[type] as FC<
          BlockProps<BlockObject>
        >;

        if (!Component) {
          return <></>;
        }

        return (
          <Component
            key={blockObject.id}
            blockObject={blockObject}
            blockComponentMap={blockComponentMap}
          />
        );
      })}
    </>
  );
};
