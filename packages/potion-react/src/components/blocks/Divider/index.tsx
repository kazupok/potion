import { getClassNameBlockId } from "potion-core/helpers";
import type { DividerBlockProps } from "../../../types/blocks-types";
import "./styles.css";

export const Divider: DividerBlockProps = ({ block }) => {
  return <hr className={`divider ${getClassNameBlockId(block)}`} />;
};
