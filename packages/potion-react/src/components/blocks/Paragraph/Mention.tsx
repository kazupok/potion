import { getPage } from "potion-core/helpers";
import type { FC } from "react";

interface ItalicProps {
  pageId: string;
}

export const Mention: FC<ItalicProps> = async ({ pageId }) => {
  const page = await getPage(pageId);

  if (page) {
    return (
      <a href={`/${page.slug}`} className="underline">
        {page.icon?.emoji ? (
          <span className="mr-1">{page.icon.emoji}</span>
        ) : page.icon.url ? (
          <img
            src={page.icon.url}
            alt={page.title}
            className="mr-1 inline-block h-5 w-5"
          />
        ) : (
          <span>📄</span>
        )}
        {page.title}
      </a>
    );
  }

  return (
    <>
      <span className="mr-1">🚫</span>
      <span className="underline">ページが見つかりませんでした</span>
    </>
  );
};
