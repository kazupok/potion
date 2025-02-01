import {
  Anchor,
  Bold,
  Code,
  Color,
  Italic,
  RichText,
  Strikethrough,
  Underline,
} from "../components";
import { BlockComponentMap } from "../types";

export const defaultRenderAnnotations: BlockComponentMap["annotations"] = {
  anchor: Anchor,
  bold: Bold,
  code: Code,
  color: Color,
  italic: Italic,
  rich_text: RichText,
  strikethrough: Strikethrough,
  underline: Underline,
};
