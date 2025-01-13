import { getPostsDatabase } from "../lib/get-posts-database";

export default async function Home() {
  const res = await getPostsDatabase();

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      {res.map((post) => (
        <div
          key={post.id}
          className="flex flex-col items-center gap-8 sm:flex-row sm:items-start"
        >
          <div>
            <h2 className="font-bold text-2xl dark:text-white">
              {post.properties.Page?.title[0]?.plain_text}
            </h2>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                className="flex h-10 items-center justify-center rounded-full border border-black/[.08] border-solid px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                href={`/${post.properties.Slug?.rich_text[0]?.plain_text}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our docs
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
