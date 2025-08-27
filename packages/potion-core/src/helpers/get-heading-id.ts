import type {
  Heading1BlockObject,
  Heading2BlockObject,
  Heading3BlockObject,
} from "../types/blocks-types";

export const getHeadingId = (
  block: Heading1BlockObject | Heading2BlockObject | Heading3BlockObject,
) => {
  if (block.type === "heading_1") {
    return block.heading_1.rich_text
      .map((richText) => {
        if (!('plain_text' in richText) || !richText.plain_text) {
          return "";
        }
        return richText.plain_text;
      })
      .join("")
      .trim();
  }

  if (block.type === "heading_2") {
    return block.heading_2.rich_text
      .map((richText) => {
        if (!('plain_text' in richText) || !richText.plain_text) {
          return "";
        }
        return richText.plain_text;
      })
      .join("")
      .trim();
  }

  if (block.type === "heading_3") {
    return block.heading_3.rich_text
      .map((richText) => {
        if (!('plain_text' in richText) || !richText.plain_text) {
          return "";
        }
        return richText.plain_text;
      })
      .join("")
      .trim();
  }
};
