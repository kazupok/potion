import type {
  BlockObject,
  BlockObjectHasChild,
  BlockObjectHasRichText,
  ColumnListBlockObject,
} from "../types/blocks-types";

// 子を持てるブロックかどうかを判定する型ガード
export function hasChildrenBlock(
  block: BlockObject,
): block is BlockObjectHasChild {
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

// カラムリストブロックかどうかを判定する型ガード
export function isColumnListBlock(
  block: BlockObject,
): block is ColumnListBlockObject {
  return block.type === "column_list";
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
