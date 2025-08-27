import type { NotionPropertyValue } from "../types/database-types.js";

export function isPropertyType<T extends NotionPropertyValue["type"]>(
  property: unknown,
  type: T,
): property is Extract<NotionPropertyValue, { type: T }> {
  return (
    property !== null &&
    typeof property === "object" &&
    "type" in property &&
    property.type === type
  );
}
