import { Client } from "@notionhq/client";
import { type PageObjectResponse, isPropertyType } from "potion-core";

export const getPostsDatabase = async () => {
  const client = new Client({
    auth: process.env.NOTION_API_SECRET,
  });

  const res = await client.databases.query({
    database_id: process.env.POST_DATABASE_ID || "",
    filter: {
      and: [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "Date",
          date: {
            on_or_before: new Date().toISOString(),
          },
        },
      ],
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
    page_size: 100,
  });

  const results = res.results.filter(
    (item): item is PageObjectResponse =>
      "properties" in item && item.object === "page",
  );

  return results.map((result) => {
    const { properties } = result;

    if (!isPropertyType(properties.Categories, "multi_select")) {
      throw new Error("Category is not a multi_select property");
    }
    if (!isPropertyType(properties.Published, "checkbox")) {
      throw new Error("Published is not a checkbox property");
    }
    if (!isPropertyType(properties.FeaturedImage, "files")) {
      throw new Error("FeaturedImage is not a files property");
    }
    if (!isPropertyType(properties.Excerpt, "rich_text")) {
      throw new Error("Excerpt is not a rich_text property");
    }
    if (!isPropertyType(properties.Date, "date")) {
      throw new Error("Date is not a date property");
    }
    if (!isPropertyType(properties.Tags, "multi_select")) {
      throw new Error("Tags is not a multi_select property");
    }
    if (!isPropertyType(properties.Rank, "number")) {
      throw new Error("Rank is not a number property");
    }
    if (!isPropertyType(properties.Slug, "rich_text")) {
      throw new Error("Slug is not a rich_text property");
    }
    if (!isPropertyType(properties.Page, "title")) {
      throw new Error("Page is not a title property");
    }

    return {
      ...result,
      properties: {
        Categories: properties.Categories,
        Published: properties.Published,
        FeaturedImage: properties.FeaturedImage,
        Excerpt: properties.Excerpt,
        Date: properties.Date,
        Tags: properties.Tags,
        Rank: properties.Rank,
        Slug: properties.Slug,
        Page: properties.Page,
      },
    };
  });
};
