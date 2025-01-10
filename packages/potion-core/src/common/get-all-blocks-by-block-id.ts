import type { Client } from "@notionhq/client";
import type { BlockObject, MentionPage } from "../types/blocks-types";
import {
  hasChildrenBlock,
  hasRichTextBlock,
  isColumnListBlock,
} from "./block-type-guard";
import { getAllRichText } from "./get-all-rich-text";

export type GetAllBlocksByBlockIdProps = {
  client: Client;
  blockId: string;
  level?: number;
  options?: {
    getMentionPage?: (pageId: string) => Promise<MentionPage>;
  };
};

export const getAllBlocksByBlockId = async ({
  client,
  blockId,
  level = 1,
  options = {},
}: GetAllBlocksByBlockIdProps): Promise<BlockObject[]> => {
  const res = await client.blocks.children.list({
    block_id: blockId,
  });

  const allBlocks = res.results.filter(
    (item): item is BlockObject => item.object === "block",
  );

  const fetchChildBlocks = async (
    _block: BlockObject,
  ): Promise<BlockObject> => {
    let block = {
      ..._block,
      Level: level,
    } as BlockObject;

    if (hasChildrenBlock(_block)) {
      const childBlocks = await getAllBlocksByBlockId({
        client,
        blockId: block.id,
        level: level + 1,
        options,
      });

      block = {
        ...block,
        Children: childBlocks,
      } as BlockObject;
    }

    if (isColumnListBlock(block)) {
      const columnListBlocks = await getAllBlocksByBlockId({
        client,
        blockId: block.id,
        level: 1,
        options,
      });

      block = {
        ...block,
        ColumnList: columnListBlocks,
      } as BlockObject;
    }

    if (hasRichTextBlock(block) && options.getMentionPage) {
      if (block.type === "paragraph") {
        block.paragraph = {
          ...block.paragraph,
          rich_text: await getAllRichText({
            richText: block.paragraph.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
      if (block.type === "heading_1") {
        block.heading_1 = {
          ...block.heading_1,
          rich_text: await getAllRichText({
            richText: block.heading_1.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
      if (block.type === "heading_2") {
        block.heading_2 = {
          ...block.heading_2,
          rich_text: await getAllRichText({
            richText: block.heading_2.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
      if (block.type === "heading_3") {
        block.heading_3 = {
          ...block.heading_3,
          rich_text: await getAllRichText({
            richText: block.heading_3.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
      if (block.type === "quote") {
        block.quote = {
          ...block.quote,
          rich_text: await getAllRichText({
            richText: block.quote.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
      if (block.type === "to_do") {
        block.to_do = {
          ...block.to_do,
          rich_text: await getAllRichText({
            richText: block.to_do.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
      if (block.type === "toggle") {
        block.toggle = {
          ...block.toggle,
          rich_text: await getAllRichText({
            richText: block.toggle.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
      if (block.type === "bulleted_list_item") {
        block.bulleted_list_item = {
          ...block.bulleted_list_item,
          rich_text: await getAllRichText({
            richText: block.bulleted_list_item.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
      if (block.type === "numbered_list_item") {
        block.numbered_list_item = {
          ...block.numbered_list_item,
          rich_text: await getAllRichText({
            richText: block.numbered_list_item.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
      if (block.type === "callout") {
        block.callout = {
          ...block.callout,
          rich_text: await getAllRichText({
            richText: block.callout.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
      if (block.type === "template") {
        block.template = {
          ...block.template,
          rich_text: await getAllRichText({
            richText: block.template.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
      if (block.type === "code") {
        block.code = {
          ...block.code,
          rich_text: await getAllRichText({
            richText: block.code.rich_text,
            getMentionPage: options.getMentionPage,
          }),
        };
      }
    }

    return block;
  };

  const allBlocksWithChildren = await Promise.all(
    allBlocks.map(fetchChildBlocks),
  );

  return allBlocksWithChildren;
};
