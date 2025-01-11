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
import type { Metadata } from "./common-types";

export type MentionPage =
  | {
      title: string;
      url: string;
      icon: {
        emoji: string;
        url: string;
      };
    }
  | undefined;

export type MentionRichTextItem = MentionRichTextItemResponse & {
  Mention?: {
    Page?: MentionPage;
  };
};

export type RichTextItem =
  | TextRichTextItemResponse
  | MentionRichTextItem
  | EquationRichTextItemResponse;

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

type ObjectType<T extends ObjectTypeHasRichText> = Omit<T, "rich_text"> & {
  rich_text: RichTextItem[];
};

// 段落
type ParagraphType = ParagraphBlockObjectResponse["paragraph"];
export type ParagraphBlockObject = Omit<
  ParagraphBlockObjectResponse,
  "paragraph"
> & {
  paragraph: ObjectType<ParagraphType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// 見出し1
type Heading1Type = Heading1BlockObjectResponse["heading_1"];
type Heading1IsToggleable = Omit<
  Heading1Type,
  "is_toggleable" | "rich_text"
> & {
  is_toggleable: true;
  rich_text: RichTextItem[];
};
type Heading1IsNotToggleable = Omit<
  Heading1Type,
  "is_toggleable" | "rich_text"
> & {
  is_toggleable: false;
  rich_text: RichTextItem[];
};
export type Heading1BlockObject = Omit<
  Heading1BlockObjectResponse,
  "heading_1"
> &
  (
    | {
        heading_1: Heading1IsToggleable;
        Children?: BlockObject[];
      }
    | {
        heading_1: Heading1IsNotToggleable;
      }
  ) &
  BaseBlockObject;

// 見出し2
type Heading2Type = Heading2BlockObjectResponse["heading_2"];
type Heading2IsToggleable = Omit<
  Heading2Type,
  "is_toggleable" | "rich_text"
> & {
  is_toggleable: true;
  rich_text: RichTextItem[];
};
type Heading2IsNotToggleable = Omit<
  Heading2Type,
  "is_toggleable" | "rich_text"
> & {
  is_toggleable: false;
  rich_text: RichTextItem[];
};

export type Heading2BlockObject = Omit<
  Heading2BlockObjectResponse,
  "heading_2"
> &
  (
    | {
        heading_2: Heading2IsToggleable;
        Children?: BlockObject[];
      }
    | {
        heading_2: Heading2IsNotToggleable;
      }
  ) &
  BaseBlockObject;

// 見出し3
type Heading3Type = Heading3BlockObjectResponse["heading_3"];
type Heading3IsToggleable = Omit<
  Heading3Type,
  "is_toggleable" | "rich_text"
> & {
  is_toggleable: true;
  rich_text: RichTextItem[];
};
type Heading3IsNotToggleable = Omit<
  Heading3Type,
  "is_toggleable" | "rich_text"
> & {
  is_toggleable: false;
  rich_text: RichTextItem[];
};

export type Heading3BlockObject = Omit<
  Heading3BlockObjectResponse,
  "heading_3"
> &
  (
    | {
        heading_3: Heading3IsToggleable;
        Children?: BlockObject[];
      }
    | {
        heading_3: Heading3IsNotToggleable;
      }
  ) &
  BaseBlockObject;

// 箇条書きリストアイテム
export type BulletedListItemType =
  BulletedListItemBlockObjectResponse["bulleted_list_item"];
export type BulletedListItemBlockObject = Omit<
  BulletedListItemBlockObjectResponse,
  "bulleted_list_item"
> & {
  bulleted_list_item: ObjectType<BulletedListItemType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// 番号付きリストアイテム
export type NumberedListItemType =
  NumberedListItemBlockObjectResponse["numbered_list_item"];
export type NumberedListItemBlockObject = Omit<
  NumberedListItemBlockObjectResponse,
  "numbered_list_item"
> & {
  numbered_list_item: ObjectType<NumberedListItemType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// 引用
export type QuoteType = QuoteBlockObjectResponse["quote"];
export type QuoteBlockObject = Omit<QuoteBlockObjectResponse, "quote"> & {
  quote: ObjectType<QuoteType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// ToDoリスト
export type ToDoType = ToDoBlockObjectResponse["to_do"];
export type ToDoBlockObject = Omit<ToDoBlockObjectResponse, "to_do"> & {
  to_do: ObjectType<ToDoType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// トグル
export type ToggleType = ToggleBlockObjectResponse["toggle"];
export type ToggleBlockObject = Omit<ToggleBlockObjectResponse, "toggle"> & {
  toggle: ObjectType<ToggleType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// コールアウト
export type CalloutType = CalloutBlockObjectResponse["callout"];
export type CalloutBlockObject = Omit<CalloutBlockObjectResponse, "callout"> & {
  callout: ObjectType<CalloutType>;
  Children?: BlockObject[];
} & BaseBlockObject;

// テンプレート
export type TemplateType = TemplateBlockObjectResponse["template"];
export type TemplateBlockObject = Omit<
  TemplateBlockObjectResponse,
  "template"
> & {
  template: ObjectType<TemplateType>;
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
  code: ObjectType<CodeType>;
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
    Page: MentionPage;
  };

// テーブル行
export type TableRowType = TableRowBlockObjectResponse["table_row"];
export type TableRowBlockObject = TableRowBlockObjectResponse & BaseBlockObject;

// 埋め込み
export type EmbedType = EmbedBlockObjectResponse["embed"];
export type EmbedBlockObject = EmbedBlockObjectResponse & {
  Metadata?: Metadata;
} & BaseBlockObject;

// ブックマーク
export type BookmarkType = BookmarkBlockObjectResponse["bookmark"];
export type BookmarkBlockObject = BookmarkBlockObjectResponse & {
  Metadata?: Metadata;
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
