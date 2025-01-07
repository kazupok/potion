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
  FileBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  LinkPreviewBlockObjectResponse,
  LinkToPageBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ParagraphBlockObjectResponse,
  PdfBlockObjectResponse,
  QuoteBlockObjectResponse,
  SyncedBlockBlockObjectResponse,
  TableBlockObjectResponse,
  TableOfContentsBlockObjectResponse,
  TableRowBlockObjectResponse,
  TemplateBlockObjectResponse,
  ToDoBlockObjectResponse,
  ToggleBlockObjectResponse,
  UnsupportedBlockObjectResponse,
  VideoBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

type BaseBlockObject = {
  Level: number;
};

export type BlockObject = BlockObjectHasChild | BlockObjectNotHasChild;
export type BlockObjectHasChild =
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject
  | ParagraphBlockObject
  | QuoteBlockObject
  | BulletedListItemBlockObject
  | CalloutBlockObject
  | ChildDatabaseBlockObject
  | ChildPageBlockObject
  | ColumnBlockObject
  | NumberedListItemBlockObject
  | SyncedBlockBlockObject
  | TableBlockObject
  | TemplateBlockObject
  | ToDoBlockObject
  | ToggleBlockObject;

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

/**
 * Childrenを持つブロックの型を定義
 */
// 見出し1
type Heading1Type = Heading1BlockObjectResponse["heading_1"];
type Heading1IsToggleable = Omit<Heading1Type, "is_toggleable"> & {
  is_toggleable: true;
};
type Heading1IsNotToggleable = Omit<Heading1Type, "is_toggleable"> & {
  is_toggleable: false;
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
type Heading2IsToggleable = Omit<Heading2Type, "is_toggleable"> & {
  is_toggleable: true;
};
type Heading2IsNotToggleable = Omit<Heading2Type, "is_toggleable"> & {
  is_toggleable: false;
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
type Heading3IsToggleable = Omit<Heading3Type, "is_toggleable"> & {
  is_toggleable: true;
};
type Heading3IsNotToggleable = Omit<Heading3Type, "is_toggleable"> & {
  is_toggleable: false;
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

// 段落
export type ParagraphBlockObject = ParagraphBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// 引用
export type QuoteBlockObject = QuoteBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// 箇条書きリストアイテム
export type BulletedListItemBlockObject =
  BulletedListItemBlockObjectResponse & {
    Children?: BlockObject[];
  } & BaseBlockObject;

// コールアウト
export type CalloutBlockObject = CalloutBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// 子データベース
export type ChildDatabaseBlockObject = ChildDatabaseBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// 子ページ
export type ChildPageBlockObject = ChildPageBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// カラム
export type ColumnBlockObject = ColumnBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// 番号付きリストアイテム
export type NumberedListItemBlockObject =
  NumberedListItemBlockObjectResponse & {
    Children?: BlockObject[];
  } & BaseBlockObject;

// 同期ブロック
export type SyncedBlockBlockObject = SyncedBlockBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// テーブル
export type TableBlockObject = TableBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// テンプレート
export type TemplateBlockObject = TemplateBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// ToDoリスト
export type ToDoBlockObject = ToDoBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

// トグル
export type ToggleBlockObject = ToggleBlockObjectResponse & {
  Children?: BlockObject[];
} & BaseBlockObject;

/**
 * Childrenを持たないブロックの型を定義
 */
// 数式
export type EquationBlockObject = EquationBlockObjectResponse & BaseBlockObject;

// コード
export type CodeBlockObject = CodeBlockObjectResponse & BaseBlockObject;

// 区切り線
export type DividerBlockObject = DividerBlockObjectResponse & BaseBlockObject;

// パンくずリスト
export type BreadcrumbBlockObject = BreadcrumbBlockObjectResponse &
  BaseBlockObject;

// 目次
export type TableOfContentsBlockObject = TableOfContentsBlockObjectResponse &
  BaseBlockObject;

// カラムリスト
export type ColumnListBlockObject = ColumnListBlockObjectResponse & {
  ColumnList: BlockObject[];
} & BaseBlockObject;

// ページリンク
export type LinkToPageBlockObject = LinkToPageBlockObjectResponse &
  BaseBlockObject;

// テーブル行
export type TableRowBlockObject = TableRowBlockObjectResponse & BaseBlockObject;

// 埋め込み
export type EmbedBlockObject = EmbedBlockObjectResponse & BaseBlockObject;

// ブックマーク
export type BookmarkBlockObject = BookmarkBlockObjectResponse & BaseBlockObject;

// 画像
export type ImageBlockObject = ImageBlockObjectResponse & BaseBlockObject;

// 動画
export type VideoBlockObject = VideoBlockObjectResponse & BaseBlockObject;

// PDF
export type PdfBlockObject = PdfBlockObjectResponse & BaseBlockObject;

// ファイル
export type FileBlockObject = FileBlockObjectResponse & BaseBlockObject;

// 音声
export type AudioBlockObject = AudioBlockObjectResponse & BaseBlockObject;

// リンクプレビュー
export type LinkPreviewBlockObject = LinkPreviewBlockObjectResponse &
  BaseBlockObject;

// サポート外
export type UnsupportedBlockObject = UnsupportedBlockObjectResponse &
  BaseBlockObject;
