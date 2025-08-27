import type { Metadata } from "../types/index.js";

// Web-compatible HTML parser using DOMParser (available in browsers and Cloudflare Workers)
const parseHTML = (html: string): Document => {
  // Use DOMParser in Web environments (browsers, Cloudflare Workers)
  if (typeof DOMParser !== 'undefined') {
    return new DOMParser().parseFromString(html, 'text/html');
  }
  
  // Fallback for Node.js environments - create minimal DOM-like interface
  throw new Error('HTML parsing not supported in this environment. Please provide a custom parser.');
};

export const getMetadata = async (url: URL): Promise<Metadata | null> => {
  try {
    const html = await fetch(url.toString()).then((res) => res.text());
    const doc = parseHTML(html);

    const title =
      doc
        .querySelector('meta[property="og:title"]')
        ?.getAttribute("content") ||
      doc
        .querySelector('meta[name="twitter:title"]')
        ?.getAttribute("content") ||
      doc.querySelector("title")?.textContent ||
      doc.querySelector('meta[itemprop="name"]')?.getAttribute("content");

    // descriptionの取得
    let description =
      doc
        .querySelector('meta[property="og:description"]')
        ?.getAttribute("content") ||
      doc
        .querySelector('meta[name="twitter:description"]')
        ?.getAttribute("content") ||
      doc.querySelector('meta[name="description"]')?.getAttribute("content") ||
      doc
        .querySelector('meta[itemprop="description"]')
        ?.getAttribute("content");

    // descriptionが未設定の場合、最初のpタグから抽出
    if (!description) {
      const firstParagraph = doc
        .querySelector("p")
        ?.textContent?.replace(/\s+/g, " ")
        .trim();

      if (firstParagraph) {
        // 最初の100文字を取得（句点で区切る）
        description = firstParagraph;
      }
    }

    const meta = {
      title: title || undefined,
      description: description || undefined,
      image: doc
        .querySelector('meta[property="og:image"]')
        ?.getAttribute("content") || undefined,
      url: doc
        .querySelector('meta[property="og:url"]')
        ?.getAttribute("content") || undefined,
    };
    return meta;
  } catch (err) {
    // Optional logging - allow environments to define their own logging
    if (typeof console !== 'undefined' && console.error) {
      console.error("Metadata fetch error:", err);
    }
    return null;
  }
};
