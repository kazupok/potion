import type {
  BlockObject,
  BlockObjectHasChild,
  BlockObjectHasMetadata,
  BlockObjectHasRichText,
  Heading1BlockObject,
  Heading2BlockObject,
  Heading3BlockObject,
  ToggleableHeading1,
  ToggleableHeading2,
  ToggleableHeading3,
} from "../types/blocks-types";

export function isToggleableHeading(
  block: Heading1BlockObject | Heading2BlockObject | Heading3BlockObject,
): block is ToggleableHeading1 | ToggleableHeading2 | ToggleableHeading3 {
  if (block.type === "heading_1") {
    return block.heading_1.is_toggleable === true;
  }
  if (block.type === "heading_2") {
    return block.heading_2.is_toggleable === true;
  }
  if (block.type === "heading_3") {
    return block.heading_3.is_toggleable === true;
  }
  return false;
}

// 子を持てるブロックかどうかを判定する型ガード
export function hasChildrenBlock(
  block: BlockObject,
): block is BlockObjectHasChild {
  switch (block.type) {
    case "heading_1":
      return isToggleableHeading(block);
    case "heading_2":
      return isToggleableHeading(block);
    case "heading_3":
      return isToggleableHeading(block);
    case "paragraph":
    case "quote":
    case "to_do":
    case "toggle":
    case "bulleted_list_item":
    case "numbered_list_item":
    case "callout":
    case "child_database":
    case "child_page":
    case "column":
    case "synced_block":
    case "table":
    case "template": {
      return true;
    }
    default: {
      return false;
    }
  }
}

// メンションを持てるブロックかどうかを判定する型ガード
export function hasRichTextBlock(
  block: BlockObject,
): block is BlockObjectHasRichText {
  switch (block.type) {
    case "heading_1":
    case "heading_2":
    case "heading_3":
    case "paragraph":
    case "quote":
    case "to_do":
    case "toggle":
    case "bulleted_list_item":
    case "numbered_list_item":
    case "callout":
    case "template":
    case "code": {
      return true;
    }
    default: {
      return false;
    }
  }
}

export function hasMetadataBlock(
  block: BlockObject,
): block is BlockObjectHasMetadata {
  switch (block.type) {
    case "bookmark":
    case "embed": {
      return true;
    }
    default: {
      return false;
    }
  }
}
