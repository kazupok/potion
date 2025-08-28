import type {
  AudioBlockObjectResponse,
  BookmarkBlockObjectResponse,
  BreadcrumbBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  CalloutBlockObjectResponse,
  ChildDatabaseBlockObjectResponse,
  ChildPageBlockObjectResponse,
  CodeBlockObjectResponse,
  ColumnBlockObjectResponse,
  ColumnListBlockObjectResponse,
  DividerBlockObjectResponse,
  EmbedBlockObjectResponse,
  EquationBlockObjectResponse,
  EquationRichTextItemResponse,
  FileBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  LinkPreviewBlockObjectResponse,
  LinkToPageBlockObjectResponse,
  MentionRichTextItemResponse,
  NumberedListItemBlockObjectResponse,
  ParagraphBlockObjectResponse,
  PdfBlockObjectResponse,
  QuoteBlockObjectResponse,
  RichTextItemResponse,
  SyncedBlockBlockObjectResponse,
  TableBlockObjectResponse,
  TableOfContentsBlockObjectResponse,
  TableRowBlockObjectResponse,
  TemplateBlockObjectResponse,
  TextRichTextItemResponse,
  ToDoBlockObjectResponse,
  ToggleBlockObjectResponse,
  UnsupportedBlockObjectResponse,
  VideoBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { MentionPage, Metadata } from "./common-types";

// Base properties shared by all RichText items
export interface RichTextItemCommon {
  plain_text: string;
  href: string | null;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: unknown; // v4対応: ApiColorとstringの両方に対応
  };
}

export type MentionRichTextItem = MentionRichTextItemResponse &
  RichTextItemCommon & {
    Page?: MentionPage;
  };

export type ExtendedTextRichTextItemResponse = TextRichTextItemResponse &
  RichTextItemCommon;

export type ExtendedEquationRichTextItemResponse =
  EquationRichTextItemResponse & RichTextItemCommon;

export type RichTextItem =
  | ExtendedTextRichTextItemResponse
  | MentionRichTextItem
  | ExtendedEquationRichTextItemResponse;

export type BaseBlockObject = {
  Level: number;
};

export type BlockObject = BlockObjectHasChild | BlockObjectNotHasChild;
export type BlockObjectHasChild =
  | ParagraphBlockObject
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject
  | BulletedListItemBlockObject
  | NumberedListItemBlockObject
  | QuoteBlockObject
  | ToDoBlockObject
  | ToggleBlockObject
  | CalloutBlockObject
  | ChildDatabaseBlockObject
  | ChildPageBlockObject
  | ColumnBlockObject
  | SyncedBlockBlockObject
  | TableBlockObject
  | TemplateBlockObject;

export type BlockObjectNotHasChild =
  | EquationBlockObject
  | CodeBlockObject
  | DividerBlockObject
  | BreadcrumbBlockObject
  | TableOfContentsBlockObject
  | ColumnListBlockObject
  | LinkToPageBlockObject
  | TableRowBlockObject
  | EmbedBlockObject
  | BookmarkBlockObject
  | ImageBlockObject
  | VideoBlockObject
  | PdfBlockObject
  | FileBlockObject
  | AudioBlockObject
  | LinkPreviewBlockObject
  | UnsupportedBlockObject;

export type BlockObjectHasRichText =
  | ParagraphBlockObject
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject
  | BulletedListItemBlockObject
  | NumberedListItemBlockObject
  | QuoteBlockObject
  | ToDoBlockObject
  | ToggleBlockObject
  | TemplateBlockObject
  | CalloutBlockObject
  | CodeBlockObject;

export type BlockObjectHasMetadata = BookmarkBlockObject | EmbedBlockObject;

/**
 * Childrenを持つブロックの型を定義
 */

type ObjectTypeHasRichText =
  | ParagraphType
  | Heading1Type
  | Heading2Type
  | Heading3Type
  | BulletedListItemType
  | NumberedListItemType
  | QuoteType
  | ToDoType
  | ToggleType
  | TemplateType
  | CalloutType
  | CodeType;

type ReplaceRichText<T extends ObjectTypeHasRichText> = Omit<T, "rich_text"> & {
  rich_text: RichTextItemResponse[];
};

type ReplaceToggleable<
  T extends Heading1Type | Heading2Type | Heading3Type,
  K extends boolean,
> = Omit<T, "is_toggleable"> & {
  is_toggleable: K;
};

// 段落
type ParagraphType = ParagraphBlockObjectResponse["paragraph"];
export type ParagraphBlockObject = Omit<
  ParagraphBlockObjectResponse,
  "paragraph"
> & {
  paragraph: ReplaceRichText<ParagraphType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// 見出し1
type Heading1Type = Heading1BlockObjectResponse["heading_1"];
export type ToggleableHeading1 = {
  heading_1: ReplaceRichText<ReplaceToggleable<Heading1Type, true>>;
  Children?: BlockObject[];
} & Omit<Heading1BlockObjectResponse, "heading_1"> &
  BaseBlockObject;
export type NonToggleableHeading1 = {
  heading_1: ReplaceRichText<ReplaceToggleable<Heading1Type, false>>;
} & Omit<Heading1BlockObjectResponse, "heading_1"> &
  BaseBlockObject;

export type Heading1BlockObject = ToggleableHeading1 | NonToggleableHeading1;

// 見出し2
type Heading2Type = Heading2BlockObjectResponse["heading_2"];
export type ToggleableHeading2 = {
  heading_2: ReplaceRichText<ReplaceToggleable<Heading2Type, true>>;
  Children?: BlockObject[];
} & Omit<Heading2BlockObjectResponse, "heading_2"> &
  BaseBlockObject;

export type NonToggleableHeading2 = {
  heading_2: ReplaceRichText<ReplaceToggleable<Heading2Type, false>>;
} & Omit<Heading2BlockObjectResponse, "heading_2"> &
  BaseBlockObject;

export type Heading2BlockObject = ToggleableHeading2 | NonToggleableHeading2;

// 見出し3
type Heading3Type = Heading3BlockObjectResponse["heading_3"];
export type ToggleableHeading3 = {
  heading_3: ReplaceRichText<ReplaceToggleable<Heading3Type, true>>;
  Children?: BlockObject[];
} & Omit<Heading3BlockObjectResponse, "heading_3"> &
  BaseBlockObject;

export type NonToggleableHeading3 = {
  heading_3: ReplaceRichText<ReplaceToggleable<Heading3Type, false>>;
} & Omit<Heading3BlockObjectResponse, "heading_3"> &
  BaseBlockObject;

export type Heading3BlockObject = ToggleableHeading3 | NonToggleableHeading3;

// 箇条書きリストアイテム
export type BulletedListItemType =
  BulletedListItemBlockObjectResponse["bulleted_list_item"];
export type BulletedListItemBlockObject = Omit<
  BulletedListItemBlockObjectResponse,
  "bulleted_list_item"
> & {
  bulleted_list_item: ReplaceRichText<BulletedListItemType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// 番号付きリストアイテム
export type NumberedListItemType =
  NumberedListItemBlockObjectResponse["numbered_list_item"];
export type NumberedListItemBlockObject = Omit<
  NumberedListItemBlockObjectResponse,
  "numbered_list_item"
> & {
  numbered_list_item: ReplaceRichText<NumberedListItemType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// 引用
export type QuoteType = QuoteBlockObjectResponse["quote"];
export type QuoteBlockObject = Omit<QuoteBlockObjectResponse, "quote"> & {
  quote: ReplaceRichText<QuoteType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// ToDoリスト
export type ToDoType = ToDoBlockObjectResponse["to_do"];
export type ToDoBlockObject = Omit<ToDoBlockObjectResponse, "to_do"> & {
  to_do: ReplaceRichText<ToDoType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// トグル
export type ToggleType = ToggleBlockObjectResponse["toggle"];
export type ToggleBlockObject = Omit<ToggleBlockObjectResponse, "toggle"> & {
  toggle: ReplaceRichText<ToggleType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// コールアウト
export type CalloutType = CalloutBlockObjectResponse["callout"];
export type CalloutBlockObject = Omit<CalloutBlockObjectResponse, "callout"> & {
  callout: ReplaceRichText<CalloutType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// テンプレート
export type TemplateType = TemplateBlockObjectResponse["template"];
export type TemplateBlockObject = Omit<
  TemplateBlockObjectResponse,
  "template"
> & {
  template: ReplaceRichText<TemplateType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// 子データベース
export type ChildDatabaseType =
  ChildDatabaseBlockObjectResponse["child_database"];
export type ChildDatabaseBlockObject = ChildDatabaseBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// 子ページ
export type ChildPageType = ChildPageBlockObjectResponse["child_page"];
export type ChildPageBlockObject = ChildPageBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// カラム
export type ColumnType = ColumnBlockObjectResponse["column"];
export type ColumnBlockObject = ColumnBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// 同期ブロック
export type SyncedBlockType = SyncedBlockBlockObjectResponse["synced_block"];
export type SyncedBlockBlockObject = SyncedBlockBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// テーブル
export type TableType = TableBlockObjectResponse["table"];
export type TableBlockObject = TableBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

/**
 * Childrenを持たないブロックの型を定義
 */

// コード
export type CodeType = CodeBlockObjectResponse["code"];
export type CodeBlockObject = Omit<CodeBlockObjectResponse, "code"> & {
  code: ReplaceRichText<CodeType>;
} & BaseBlockObject;

// 数式
export type EquationType = EquationBlockObjectResponse["equation"];
export type EquationBlockObject = EquationBlockObjectResponse & BaseBlockObject;

// 区切り線
export type DividerType = DividerBlockObjectResponse["divider"];
export type DividerBlockObject = DividerBlockObjectResponse & BaseBlockObject;

// パンくずリスト
export type BreadcrumbType = BreadcrumbBlockObjectResponse["breadcrumb"];
export type BreadcrumbBlockObject = BreadcrumbBlockObjectResponse &
  BaseBlockObject;

// 目次
export type TableOfContentsType =
  TableOfContentsBlockObjectResponse["table_of_contents"];
export type TableOfContentsBlockObject = TableOfContentsBlockObjectResponse &
  BaseBlockObject;

// カラムリスト
export type ColumnListType = ColumnListBlockObjectResponse["column_list"];
export type ColumnListBlockObject = ColumnListBlockObjectResponse & {
  ColumnList: BlockObject[];
} & BaseBlockObject;

// ページリンク
export type LinkToPageType = LinkToPageBlockObjectResponse["link_to_page"];
export type LinkToPageBlockObject = LinkToPageBlockObjectResponse &
  BaseBlockObject & {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    Page: MentionPage | any;
  };

// テーブル行
export type TableRowType = TableRowBlockObjectResponse["table_row"];
export type TableRowBlockObject = TableRowBlockObjectResponse & BaseBlockObject;

// 埋め込み
export type EmbedType = EmbedBlockObjectResponse["embed"];
export type EmbedBlockObject = EmbedBlockObjectResponse & {
  Metadata?: Metadata | null;
} & BaseBlockObject;

// ブックマーク
export type BookmarkType = BookmarkBlockObjectResponse["bookmark"];
export type BookmarkBlockObject = BookmarkBlockObjectResponse & {
  Metadata?: Metadata | null;
} & BaseBlockObject;

// 画像
export type ImageType = ImageBlockObjectResponse["image"];
export type ImageBlockObject = ImageBlockObjectResponse & BaseBlockObject;

// 動画
export type VideoType = VideoBlockObjectResponse["video"];
export type VideoBlockObject = VideoBlockObjectResponse & BaseBlockObject;

// PDF
export type PdfType = PdfBlockObjectResponse["pdf"];
export type PdfBlockObject = PdfBlockObjectResponse & BaseBlockObject;

// ファイル
export type FileType = FileBlockObjectResponse["file"];
export type FileBlockObject = FileBlockObjectResponse & BaseBlockObject;

// 音声
export type AudioType = AudioBlockObjectResponse["audio"];
export type AudioBlockObject = AudioBlockObjectResponse & BaseBlockObject;

// リンクプレビュー
export type LinkPreviewType = LinkPreviewBlockObjectResponse["link_preview"];
export type LinkPreviewBlockObject = LinkPreviewBlockObjectResponse &
  BaseBlockObject;

// サポート外
export type UnsupportedType = UnsupportedBlockObjectResponse["unsupported"];
export type UnsupportedBlockObject = UnsupportedBlockObjectResponse &
  BaseBlockObject;
