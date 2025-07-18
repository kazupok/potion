import type { VideoBlockObject } from "../types/blocks-types";

export const getVideoPath = (block: VideoBlockObject) => {
  if (block.video.type === "external") {
    return block.video.external.url;
  }

  return block.video.file.url;
};
