import React, { FC } from "react";
import "./style.css";
import { MentionProps } from "../../../../types/blocks-types";

export const MentionPage: FC<MentionProps> = ({ pageId, page }) => {
  if (!page) {
    return (
      <>
        <span className="ptn-blk-mention-error-icon">🚫</span>
        <span className="ptn-blk-mention-error-text">
          ページが見つかりませんでした
        </span>
      </>
    );
  }

  return (
    <a href={page.url} className="ptn-blk-mention-link">
      {page.icon?.emoji ? (
        <span className="ptn-blk-mention-icon">{page.icon.emoji}</span>
      ) : page.icon.url ? (
        <img
          src={page.icon.url}
          alt={page.title}
          className="ptn-blk-mention-image"
        />
      ) : (
        <span>📄</span>
      )}
      {page?.title || pageId}
    </a>
  );
};
