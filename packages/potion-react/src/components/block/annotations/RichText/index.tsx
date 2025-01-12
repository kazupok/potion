import katex from "katex";
import type { RichTextItem } from "potion-core";
import React, { FC } from "react";
import { Anchor } from "../Anchor";
import { Bold } from "../Bold";
import { Code } from "../Code";
import { Color } from "../Color";
import { Italic } from "../Italic";
import { Strikethrough } from "../Strikethrough";
import { Underline } from "../Underline";
import "./styles.css";
import { MentionPage } from "../../common/MentionPage";

export type RichTextProps = {
  richText: RichTextItem;
};

export const RichText: FC<RichTextProps> = ({ richText }) => {
  const renderContent = () => {
    if (richText.type === "text") {
      if (richText.plain_text) {
        return richText.plain_text
          .split("\n")
          .map((content: string, index: number) => {
            if (index === 0) return content;
            return (
              <>
                <br
                  key={index}
                  className="ptn-blk-annotations-richtext-line-break"
                />
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
          className="ptn-blk-annotations-richtext-equation"
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
        <MentionPage
          pageId={richText.mention.page.id}
          page={richText.Mention?.Page || undefined}
        />
      );
    }

    return <></>;
  };

  return (
    <span className="ptn-blk-annotations-richtext">
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
    </span>
  );
};
