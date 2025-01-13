import { RenderBlock, createRenderBlocks } from "potion-react";
import { getAllBlock } from "../../lib/get-all-block";
import { getPostsDatabase } from "../../lib/get-posts-database";
export const runtime = "edge";

import "potion-react/styles";

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const res = await getPostsDatabase();
  const post = res.find(
    (post) => post.properties.Slug?.rich_text[0]?.plain_text === params.slug,
  );

  if (!post) return <div>Post not found</div>;

  const blockObjects = await getAllBlock(post.id);
  const defaultRenderBlocks = createRenderBlocks();

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      {post && (
        <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
          <h1 className="font-bold text-4xl dark:text-white">
            {post.properties.Page?.title[0]?.plain_text}
          </h1>
          <div className="w-full">
            <RenderBlock
              blockObjects={blockObjects.map((block, index) => ({
                ...block,
                key: block.id || index,
              }))}
              blockComponentMap={defaultRenderBlocks}
            />
          </div>
        </main>
      )}
    </div>
  );
}
