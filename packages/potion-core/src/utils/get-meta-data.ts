import { parse } from "node-html-parser";
import type { Metadata } from "../types";

export const getMetadata = async (url: URL): Promise<Metadata | null> => {
  try {
    const html = await fetch(url.toString()).then((res) => res.text());
    const root = parse(html);

    const title =
      root
        .querySelector('meta[property="og:title"]')
        ?.getAttribute("content") ||
      root
        .querySelector('meta[name="twitter:title"]')
        ?.getAttribute("content") ||
      root.querySelector("title")?.text ||
      root.querySelector('meta[itemprop="name"]')?.getAttribute("content");

    // descriptionの取得
    let description =
      root
        .querySelector('meta[property="og:description"]')
        ?.getAttribute("content") ||
      root
        .querySelector('meta[name="twitter:description"]')
        ?.getAttribute("content") ||
      root.querySelector('meta[name="description"]')?.getAttribute("content") ||
      root
        .querySelector('meta[itemprop="description"]')
        ?.getAttribute("content");

    // descriptionが未設定の場合、最初のpタグから抽出
    if (!description) {
      const firstParagraph = root
        .querySelector("p")
        ?.textContent?.replace(/\s+/g, " ")
        .trim();

      if (firstParagraph) {
        // 最初の100文字を取得（句点で区切る）
        description = firstParagraph;
      }
    }

    const meta = {
      title,
      description,
      image: root
        .querySelector('meta[property="og:image"]')
        ?.getAttribute("content"),
      url: root
        .querySelector('meta[property="og:url"]')
        ?.getAttribute("content"),
    };
    return meta;
  } catch (err) {
    console.error("Metadata fetch error:", err);
    return null;
  }
};
