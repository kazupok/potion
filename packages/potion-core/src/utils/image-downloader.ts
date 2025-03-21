export const imageDownloader = async (url: URL) => {
  const response = await fetch(url);
  const blob = await response.blob();
  // publcフォルダに保存
  const filePath = `public/images/${url.pathname}`;
  const fs = require("fs");
  const path = require("path");

  // ディレクトリが存在しない場合は作成
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // ファイルを保存
  fs.writeFileSync(filePath, blob);

  return URL.createObjectURL(blob);
};
