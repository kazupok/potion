export const isTweetURL = (_url: string): boolean => {
  const url = new URL(_url);

  if (
    url.hostname !== "twitter.com" &&
    url.hostname !== "www.twitter.com" &&
    url.hostname !== "x.com" &&
    url.hostname !== "www.x.com"
  ) {
    return false;
  }

  return /\/[^/]+\/status\/[\d]+/.test(url.pathname);
};

export const isTikTokURL = (_url: string): boolean => {
  const url = new URL(_url);

  if (url.hostname !== "tiktok.com" && url.hostname !== "www.tiktok.com") {
    return false;
  }
  return /\/[^/]+\/video\/[\d]+/.test(url.pathname);
};

export const isInstagramURL = (_url: string): boolean => {
  const url = new URL(_url);

  if (
    url.hostname !== "instagram.com" &&
    url.hostname !== "www.instagram.com"
  ) {
    return false;
  }
  return /\/p\/[^/]+/.test(url.pathname);
};

export const isPinterestURL = (_url: string): boolean => {
  const url = new URL(_url);

  if (
    url.hostname !== "pinterest.com" &&
    url.hostname !== "www.pinterest.com" &&
    url.hostname !== "pinterest.jp" &&
    url.hostname !== "www.pinterest.jp"
  ) {
    return false;
  }
  return /\/pin\/[\d]+/.test(url.pathname);
};

export const isCodePenURL = (_url: string): boolean => {
  const url = new URL(_url);

  if (url.hostname !== "codepen.io" && url.hostname !== "www.codepen.io") {
    return false;
  }
  return /\/[^/]+\/pen\/[^/]+/.test(url.pathname);
};

export const isShortAmazonURL = (_url: string): boolean => {
  const url = new URL(_url);

  if (url.hostname === "amzn.to" || url.hostname === "www.amzn.to") {
    return true;
  }
  return false;
};

export const isFullAmazonURL = (_url: string): boolean => {
  const url = new URL(_url);

  if (
    url.hostname === "amazon.com" ||
    url.hostname === "www.amazon.com" ||
    url.hostname === "amazon.co.jp" ||
    url.hostname === "www.amazon.co.jp"
  ) {
    return true;
  }
  return false;
};

export const isAmazonURL = (_url: string): boolean => {
  return isShortAmazonURL(_url) || isFullAmazonURL(_url);
};

export const isYouTubeURL = (_url: string): boolean => {
  const url = new URL(_url);

  if (["www.youtube.com", "youtube.com", "youtu.be"].includes(url.hostname)) {
    return true;
  }
  return false;
};

// Supported URL
//
// - https://youtu.be/0zM3nApSvMg
// - https://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index
// - https://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s
// - https://www.youtube.com/watch?v=0zM3nApSvMg
// - https://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0
// - https://www.youtube.com/embed/0zM3nApSvMg?rel=0
// - https://youtube.com/live/uOLwqWlpKbA
export const parseYouTubeVideoId = (_url: string): string => {
  const url = new URL(_url);

  if (!isYouTubeURL(_url)) return "";

  if (url.hostname === "youtu.be") {
    return url.pathname.split("/")[1];
  }
  if (url.pathname === "/watch") {
    return url.searchParams.get("v") || "";
  }

  const elements = url.pathname.split("/");

  if (elements.length < 2) return "";

  if (
    elements[1] === "v" ||
    elements[1] === "embed" ||
    elements[1] === "live"
  ) {
    return elements[2];
  }

  return "";
};
