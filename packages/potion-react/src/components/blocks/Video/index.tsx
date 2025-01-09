import {
  getClassNameBlockId,
  getVideoPath,
  isYouTubeURL,
  parseYouTubeVideoId,
} from "potion-core/helpers";
import type { VideoBlockProps } from "../../../types/blocks-types";
import "./styles.css";

const renderVideoContent = (videoPath: string) => {
  if (isYouTubeURL(videoPath)) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${parseYouTubeVideoId(videoPath)}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="video-iframe"
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
      className="video-iframe"
    />
  );
};

export const Video: VideoBlockProps = ({ block }) => {
  const videoPath = getVideoPath(block);

  return (
    <figure className={`video-container ${getClassNameBlockId(block)}`}>
      {renderVideoContent(videoPath)}
    </figure>
  );
};
