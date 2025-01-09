import katex from "katex";
import type { RichTextItemResponse } from "potion-core/notion";
import type { FC } from "react";
import { Anchor } from "./Anchor";
import { Bold } from "./Bold";
import { Code } from "./Code";
import { Color } from "./Color";
import { Italic } from "./Italic";
import { Mention } from "./Mention";
import { Strikethrough } from "./Strikethrough";
import { Underline } from "./Underline";

interface RichTextRendererProps {
  richText: RichTextItemResponse;
}

export const RichTextRenderer: FC<RichTextRendererProps> = ({ richText }) => {
  const renderContent = () => {
    if (richText.type === "text") {
      if (richText.plain_text) {
        return richText.plain_text
          .split("\n")
          .map((content: string, index: number) => {
            console.log(content);
            if (index === 0) return content;
            return (
              <>
                {/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
                <br key={index} />
                {content}
              </>
            );
          });
      }
      return <></>;
    }

    if (richText.type === "equation") {
      return (
        <span
          dangerouslySetInnerHTML={{
            __html: katex.renderToString(richText.equation.expression, {
              throwOnError: false,
            }),
          }}
        />
      );
    }

    if (
      richText.type === "mention" &&
      richText.mention.type === "page" &&
      richText.mention.page
    ) {
      return <Mention pageId={richText.mention.page.id} />;
    }

    return <></>;
  };

  return (
    <Anchor richText={richText}>
      <Code richText={richText}>
        <Color richText={richText}>
          <Underline richText={richText}>
            <Strikethrough richText={richText}>
              <Italic richText={richText}>
                <Bold richText={richText}>{renderContent()}</Bold>
              </Italic>
            </Strikethrough>
          </Underline>
        </Color>
      </Code>
    </Anchor>
  );
};
