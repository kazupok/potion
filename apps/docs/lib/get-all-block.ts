import { Client, getAllBlocksByBlockId } from "potion-core";
import { imageDownloader } from "./imageDownloader";

export const getAllBlock = async (blockId: string) => {
  const client = new Client({
    auth: process.env.NOTION_API_SECRET,
  });

  return await getAllBlocksByBlockId({
    client,
    blockId,
    options: {
      imageHandler: imageDownloader,
    },
  });
};
