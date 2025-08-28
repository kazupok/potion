import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import type { BlockObject, ImageBlockObject } from "../types/blocks-types.js";
import type { GetAllBlocksByBlockIdProps } from "../types/index.js";
import { getMetadata } from "../utils/index.js";
import {
  hasChildrenBlock,
  hasMetadataBlock,
  hasRichTextBlock,
} from "./block-type-guard.js";
import { getAllRichText } from "./get-all-rich-text.js";

const defaultOptions = {
  disableGetMentionPage: false,
  disableGetMetadata: false,
  getMentionPage: undefined,
  getMetadata,
};

export const getAllBlocksByBlockId = async ({
  client,
  blockId,
  level = 1,
  options: _options,
}: GetAllBlocksByBlockIdProps): Promise<BlockObject[]> => {
  const options = {
    ...defaultOptions,
    ..._options,
  };

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

    if (
      block.type === "image" &&
      block.image.type === "file" &&
      options.imageHandler
    ) {
      const imageUrl = new URL(block.image.file.url);
      const newImageUrl = await options.imageHandler(imageUrl);
      block = {
        ...block,
        image: {
          ...block.image,
          file: {
            ...block.image.file,
            url: newImageUrl.toString(),
          },
        },
      } as ImageBlockObject;
    }

    if (block.type === "column_list") {
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

    if (
      !options.disableGetMentionPage &&
      options.getMentionPage &&
      hasRichTextBlock(block)
    ) {
      if (block.type === "paragraph") {
        block.paragraph = {
          ...block.paragraph,
          rich_text: (await getAllRichText({
            richText: block.paragraph.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
      if (block.type === "heading_1") {
        block.heading_1 = {
          ...block.heading_1,
          rich_text: (await getAllRichText({
            richText: block.heading_1.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
      if (block.type === "heading_2") {
        block.heading_2 = {
          ...block.heading_2,
          rich_text: (await getAllRichText({
            richText: block.heading_2.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
      if (block.type === "heading_3") {
        block.heading_3 = {
          ...block.heading_3,
          rich_text: (await getAllRichText({
            richText: block.heading_3.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
      if (block.type === "quote") {
        block.quote = {
          ...block.quote,
          rich_text: (await getAllRichText({
            richText: block.quote.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
      if (block.type === "to_do") {
        block.to_do = {
          ...block.to_do,
          rich_text: (await getAllRichText({
            richText: block.to_do.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
      if (block.type === "toggle") {
        block.toggle = {
          ...block.toggle,
          rich_text: (await getAllRichText({
            richText: block.toggle.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
      if (block.type === "bulleted_list_item") {
        block.bulleted_list_item = {
          ...block.bulleted_list_item,
          rich_text: (await getAllRichText({
            richText: block.bulleted_list_item.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
      if (block.type === "numbered_list_item") {
        block.numbered_list_item = {
          ...block.numbered_list_item,
          rich_text: (await getAllRichText({
            richText: block.numbered_list_item.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
      if (block.type === "callout") {
        block.callout = {
          ...block.callout,
          rich_text: (await getAllRichText({
            richText: block.callout.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
      if (block.type === "template") {
        block.template = {
          ...block.template,
          rich_text: (await getAllRichText({
            richText: block.template.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
      if (block.type === "code") {
        block.code = {
          ...block.code,
          rich_text: (await getAllRichText({
            richText: block.code.rich_text,
            getMentionPage: options.getMentionPage,
          })) as unknown as RichTextItemResponse[],
        };
      }
    }

    if (
      !options.disableGetMentionPage &&
      options.getMentionPage &&
      block.type === "link_to_page"
    ) {
      const pageId =
        block.link_to_page.type === "page_id"
          ? block.link_to_page.page_id
          : undefined;
      const page = pageId ? { Page: await options.getMentionPage(pageId) } : {};

      block = {
        ...block,
        ...page,
      } as BlockObject;
    }

    if (
      !options.disableGetMetadata &&
      options.getMetadata &&
      hasMetadataBlock(block)
    ) {
      let url: URL | null = null;

      if (block.type === "bookmark") {
        url = new URL(block.bookmark.url);
      }

      if (block.type === "embed") {
        url = new URL(block.embed.url);
      }

      if (url) {
        const metadata = await options.getMetadata(url);
        block = {
          ...block,
          Metadata: { ...metadata },
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
