import katex from "katex";
import { FC } from "react";
import { RichTextProps } from "../../../types";

export const RichText: FC<RichTextProps> = ({
  richText,
  blockComponentMap,
}) => {
  const { annotations, commonComponents } = blockComponentMap;

  const Anchor = ({ children }: { children: React.ReactNode }) => {
    if (annotations.anchor) {
      return (
        <annotations.anchor richText={richText}>{children}</annotations.anchor>
      );
    }
    return <>{children}</>;
  };

  const Bold = ({ children }: { children: React.ReactNode }) => {
    if (annotations.bold) {
      return (
        <annotations.bold richText={richText}>{children}</annotations.bold>
      );
    }
    return <>{children}</>;
  };

  const Code = ({ children }: { children: React.ReactNode }) => {
    if (annotations.code) {
      return (
        <annotations.code richText={richText}>{children}</annotations.code>
      );
    }
    return <>{children}</>;
  };

  const Color = ({ children }: { children: React.ReactNode }) => {
    if (annotations.color) {
      return (
        <annotations.color richText={richText}>{children}</annotations.color>
      );
    }
    return <>{children}</>;
  };

  const Italic = ({ children }: { children: React.ReactNode }) => {
    if (annotations.italic) {
      return (
        <annotations.italic richText={richText}>{children}</annotations.italic>
      );
    }
    return <>{children}</>;
  };

  const Strikethrough = ({ children }: { children: React.ReactNode }) => {
    if (annotations.strikethrough) {
      return (
        <annotations.strikethrough richText={richText}>
          {children}
        </annotations.strikethrough>
      );
    }
    return <>{children}</>;
  };

  const Underline = ({ children }: { children: React.ReactNode }) => {
    if (annotations.underline) {
      return (
        <annotations.underline richText={richText}>
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
