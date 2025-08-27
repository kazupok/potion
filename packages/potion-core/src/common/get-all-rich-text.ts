import type { RichTextItemResponse } from "../notion/index.js";
import type { GetMentionPage } from "../types/index.js";
import type { RichTextItem } from "../types/blocks-types.js";

export type GetAllRichTextProps = {
  richText: RichTextItemResponse[];
  getMentionPage: GetMentionPage;
};

export const getAllRichText = async ({
  richText,
  getMentionPage,
}: GetAllRichTextProps): Promise<RichTextItemResponse[]> => {
  const allRichText = await Promise.all(
    richText?.map(async (text) => {
      if (text.type === "mention") {
        if (text.mention.type === "page") {
          const page = await getMentionPage(text.mention.page.id);
          return {
            ...text,
            Page: page,
          } as RichTextItemResponse;
        }
      }
      return text;
    }) ?? [],
  );

  return allRichText;
};
