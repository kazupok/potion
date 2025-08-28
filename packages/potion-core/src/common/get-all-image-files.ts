import type {
  BlockObject,
  GetAllImageFilesProps,
  ImageFile,
} from "../types/index.js";

export const getAllImageFiles = async ({
  client,
  blockId,
}: GetAllImageFilesProps): Promise<ImageFile[]> => {
  const imageFiles: ImageFile[] = [];

  const fetchBlocksRecursively = async (currentBlockId: string) => {
    const res = await client.blocks.children.list({
      block_id: currentBlockId,
    });

    const blocks = res.results.filter(
      (item): item is BlockObject => item.object === "block",
    );

    for (const block of blocks) {
      if (block.type === "image" && block.image.type === "file") {
        imageFiles.push({
          id: block.id,
          url: block.image.file.url,
        });
      }

      if (block.has_children) {
        await fetchBlocksRecursively(block.id);
      }
    }
  };

  await fetchBlocksRecursively(blockId);
  return imageFiles;
};
