import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type NotionPropertyValue = PageObjectResponse["properties"][string];

export type PropertyType<T extends NotionPropertyValue["type"]> = Extract<
  NotionPropertyValue,
  { type: T }
>;
