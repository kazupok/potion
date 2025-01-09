import type {
  BlockObject,
  BlockObjectHasChild,
  ColumnListBlockObject,
} from "../types/blocks-types";

// 子を持てるブロックかどうかを判定する型ガード
export function hasChildrenBlock(
  block: BlockObject,
): block is BlockObjectHasChild {
  if (block.type === "heading_1") {
    return true;
  }
  if (block.type === "heading_2") {
    return true;
  }
  if (block.type === "heading_3") {
    return true;
  }
  if (block.type === "paragraph") {
    return true;
  }
  if (block.type === "quote") {
    return true;
  }
  if (block.type === "bulleted_list_item") {
    return true;
  }
  if (block.type === "callout") {
    return true;
  }
  if (block.type === "child_database") {
    return true;
  }
  if (block.type === "child_page") {
    return true;
  }
  if (block.type === "column") {
    return true;
  }
  if (block.type === "numbered_list_item") {
    return true;
  }
  if (block.type === "synced_block") {
    return true;
  }
  if (block.type === "table") {
    return true;
  }
  if (block.type === "template") {
    return true;
  }
  if (block.type === "to_do") {
    return true;
  }
  if (block.type === "toggle") {
    return true;
  }
  return false;
}

// カラムリストブロックかどうかを判定する型ガード
export function isColumnListBlock(
  block: BlockObject,
): block is ColumnListBlockObject {
  return block.type === "column_list";
}
