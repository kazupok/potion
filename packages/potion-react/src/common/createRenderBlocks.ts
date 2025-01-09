import { Bookmark } from "../components/blocks/Bookmark";
import { BulletedListItem } from "../components/blocks/BulletedListItem";
import { Callout } from "../components/blocks/Callout";
import { Code } from "../components/blocks/Code";
import { Column } from "../components/blocks/Column";
import { ColumnList } from "../components/blocks/ColumnList";
import { Divider } from "../components/blocks/Divider";
import { Embed } from "../components/blocks/Embed";
import { Heading1 } from "../components/blocks/Heading1";
import { Heading2 } from "../components/blocks/Heading2";
import { Heading3 } from "../components/blocks/Heading3";
import { Image } from "../components/blocks/Image";
import { LinkPreview } from "../components/blocks/LinkPreview";
import { LinkToPage } from "../components/blocks/LinkToPage";
import { NumberedListItem } from "../components/blocks/NumberedListItem";
import { Paragraph } from "../components/blocks/Paragraph";
import { Quote } from "../components/blocks/Quote";
import { ToDo } from "../components/blocks/Tode";
import { Toggle } from "../components/blocks/Toggle";
import { Video } from "../components/blocks/Video";
import type { BlockComponentMap } from "../types/blocks-types";

const defaultRenderBlocks: BlockComponentMap = {
  paragraph: Paragraph,
  heading_1: Heading1,
  heading_2: Heading2,
  heading_3: Heading3,
  quote: Quote,
  code: Code,
  toggle: Toggle,
  to_do: ToDo,
  bulleted_list_item: BulletedListItem,
  numbered_list_item: NumberedListItem,
  image: Image,
  video: Video,
  bookmark: Bookmark,
  embed: Embed,
  link_to_page: LinkToPage,
  link_preview: LinkPreview,
  callout: Callout,
  divider: Divider,
  column_list: ColumnList,
  column: Column,
};

export const createRenderBlocks = (
  customBlocks: Partial<BlockComponentMap> = {},
): BlockComponentMap => {
  return {
    ...defaultRenderBlocks,
    ...customBlocks,
  };
};

export { defaultRenderBlocks };
