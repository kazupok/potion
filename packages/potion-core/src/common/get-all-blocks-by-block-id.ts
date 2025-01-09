import type { Client } from "@notionhq/client";
import type { BlockObject } from "../types/blocks-types";
import { hasChildrenBlock, isColumnListBlock } from "./block-type-guard";

export type GetAllBlocksByBlockIdProps = {
  client: Client;
  blockId: string;
  level?: number;
};

export const getAllBlocksByBlockId = async ({
  client,
  blockId,
  level = 1,
}: GetAllBlocksByBlockIdProps): Promise<BlockObject[]> => {
  const res = await client.blocks.children.list({
    block_id: blockId,
  });

  const allBlocks = res.results.filter(
    (item): item is BlockObject => item.object === "block",
  );

  const fetchChildBlocks = async (block: BlockObject): Promise<BlockObject> => {
    if (isColumnListBlock(block)) {
      const columnListBlocks = await getAllBlocksByBlockId({
        client,
        blockId: block.id,
        level: 1,
      });

      return {
        ...block,
        Level: level,
        ColumnList: columnListBlocks,
      };
    }

    if (!hasChildrenBlock(block)) {
      return {
        ...block,
        Level: level,
      };
    }

    const nextLevel = level + 1;
    const childBlocks = await getAllBlocksByBlockId({
      client,
      blockId: block.id,
      level: nextLevel,
    });

    return {
      ...block,
      Children: childBlocks,
      Level: level,
    };
  };

  const allBlocksWithChildren = await Promise.all(
    allBlocks.map(fetchChildBlocks),
  );

  return allBlocksWithChildren;
};
