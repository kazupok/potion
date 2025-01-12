import katex from "katex";
import type { RichTextItem } from "potion-core";
import { Mention } from "../mention";
import { Anchor } from "./Anchor";
import { Bold } from "./Bold";
import { Code } from "./Code";
import { Color } from "./Color";
import { Italic } from "./Italic";
import { Strikethrough } from "./Strikethrough";
import { Underline } from "./Underline";

interface RichTextRendererProps {
  richText: RichTextItem;
}

export const RichTextRenderer = ({ richText }: RichTextRendererProps) => {
  const renderContent = () => {
    if (richText.type === "text") {
      if (richText.plain_text) {
        return richText.plain_text
          .split("\n")
          .map((content: string, index: number) => {
            if (index === 0) return content;
            return (
              <>
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
      richText.mention.page.id
    ) {
      return (
        <Mention
          pageId={richText.mention.page.id}
          page={richText.Mention?.Page || undefined}
        />
      );
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
