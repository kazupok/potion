import {
  getClassNameBlockId,
  getVideoPath,
  isYouTubeURL,
  parseYouTubeVideoId,
} from "potion-core";
import { FC } from "react";
import type { VideoBlockProps } from "../../../types/blocks-types";

const renderVideoContent = (videoPath: string) => {
  if (isYouTubeURL(videoPath)) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${parseYouTubeVideoId(videoPath)}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="ptn-blk-blocks-video-iframe"
      />
    );
  }

  // :TODO
  // Viome

  return (
    <iframe
      src={videoPath}
      title="video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      className="ptn-blk-blocks-video-iframe"
    />
  );
};

export const Video: FC<VideoBlockProps> = ({ blockObject }) => {
  const videoPath = getVideoPath(blockObject);

  return (
    <figure
      className={`ptn-blk-blocks-video-container ${getClassNameBlockId(blockObject)}`}
    >
      {renderVideoContent(videoPath)}
    </figure>
  );
};
