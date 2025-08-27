import katex from "katex";
import type { FC } from "react";
import type { RichTextProps } from "../../../types";

export const RichText: FC<RichTextProps> = ({
  richText,
  blockComponentMap,
}) => {
  const { annotations, commonComponents } = blockComponentMap;

  const Anchor = ({ children }: { children: React.ReactNode }) => {
    if (annotations.anchor) {
      return (
        <annotations.anchor richText={richText as any}>{children}</annotations.anchor>
      );
    }
    return <>{children}</>;
  };

  const Bold = ({ children }: { children: React.ReactNode }) => {
    if (annotations.bold) {
      return (
        <annotations.bold richText={richText as any}>{children}</annotations.bold>
      );
    }
    return <>{children}</>;
  };

  const Code = ({ children }: { children: React.ReactNode }) => {
    if (annotations.code) {
      return (
        <annotations.code richText={richText as any}>{children}</annotations.code>
      );
    }
    return <>{children}</>;
  };

  const Color = ({ children }: { children: React.ReactNode }) => {
    if (annotations.color) {
      return (
        <annotations.color richText={richText as any}>{children}</annotations.color>
      );
    }
    return <>{children}</>;
  };

  const Italic = ({ children }: { children: React.ReactNode }) => {
    if (annotations.italic) {
      return (
        <annotations.italic richText={richText as any}>{children}</annotations.italic>
      );
    }
    return <>{children}</>;
  };

  const Strikethrough = ({ children }: { children: React.ReactNode }) => {
    if (annotations.strikethrough) {
      return (
        <annotations.strikethrough richText={richText as any}>
          {children}
        </annotations.strikethrough>
      );
    }
    return <>{children}</>;
  };

  const Underline = ({ children }: { children: React.ReactNode }) => {
    if (annotations.underline) {
      return (
        <annotations.underline richText={richText as any}>
          {children}
        </annotations.underline>
      );
    }
    return <>{children}</>;
  };

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
        commonComponents.mention && (
          <commonComponents.mention
            pageId={richText.mention.page.id}
            page={richText.Page || undefined}
          />
        )
      );
    }

    return <></>;
  };

  return (
    <span className="ptn-blk-annotations-richtext">
      <Anchor>
        <Code>
          <Color>
            <Underline>
              <Strikethrough>
                <Italic>
                  <Bold>{renderContent()}</Bold>
                </Italic>
              </Strikethrough>
            </Underline>
          </Color>
        </Code>
      </Anchor>
    </span>
  );
};
