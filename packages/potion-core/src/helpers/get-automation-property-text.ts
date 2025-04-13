/**
 * Notionのデータからプロパティのテキストを取得する関数
 * @param json Notionから受け取ったJSONデータ
 * @param propertyName 取得したいプロパティ名
 * @returns プロパティのテキスト内容、存在しない場合は空文字列
 */

export const getAutomationPropertyText = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  json: any,
  propertyName: string,
): string => {
  try {
    const property = json.data?.properties?.[propertyName];

    if (!property || property.type !== "rich_text") {
      return "";
    }

    // rich_textが配列で、最初の要素のplain_textを取得
    return property.rich_text[0]?.plain_text || "";
  } catch (error) {
    console.error(
      `プロパティ「${propertyName}」の取得中にエラーが発生しました:`,
      error,
    );
    return "";
  }
};
