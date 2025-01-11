import type { RichTextItemResponse } from "../notion";
import type { MentionPage } from "../types/blocks-types";

export type GetAllRichTextProps = {
  richText: RichTextItemResponse[];
  getMentionPage: (pageId: string) => Promise<MentionPage | null>;
};

export const getAllRichText = async ({
  richText,
  getMentionPage,
}: GetAllRichTextProps) => {
  const allRichText = await Promise.all(
    richText?.map(async (text) => {
      if (text.type === "mention") {
        if (text.mention.type === "page") {
          const page = await getMentionPage(text.mention.page.id);
          return {
            ...text,
            Page: page,
          };
        }
      }
      return text;
    }) ?? [],
  );

  return allRichText;
};
