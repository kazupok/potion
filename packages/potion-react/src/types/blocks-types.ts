import type {
  AudioBlockObject,
  BlockObject,
  BookmarkBlockObject,
  BreadcrumbBlockObject,
  BulletedListItemBlockObject,
  CalloutBlockObject,
  ChildDatabaseBlockObject,
  ChildPageBlockObject,
  CodeBlockObject,
  ColumnBlockObject,
  ColumnListBlockObject,
  DividerBlockObject,
  EmbedBlockObject,
  EquationBlockObject,
  FileBlockObject,
  Heading1BlockObject,
  Heading2BlockObject,
  Heading3BlockObject,
  ImageBlockObject,
  LinkPreviewBlockObject,
  LinkToPageBlockObject,
  MentionPage,
  NumberedListItemBlockObject,
  ParagraphBlockObject,
  PdfBlockObject,
  QuoteBlockObject,
  SyncedBlockBlockObject,
  TableBlockObject,
  TableOfContentsBlockObject,
  TableRowBlockObject,
  TemplateBlockObject,
  ToDoBlockObject,
  ToggleBlockObject,
  UnsupportedBlockObject,
  VideoBlockObject,
} from "potion-core";
import type React from "react";

export type BlockProps<T extends BlockObject> = {
  blockObject: T;
  blockComponentMap: BlockComponentMap;
};

export type ComponentType<T extends BlockObject> = React.FC<BlockProps<T>>;

// export type ServerComponentType<T extends BlockObject> = (
//   props: BlockProps<T>,
// ) => Promise<any>;

export type BlockComponentMap = {
  blocks: {
    paragraph?: React.FC<ParagraphBlockProps>;
    heading_1?: React.FC<Heading1BlockProps>;
    heading_2?: React.FC<Heading2BlockProps>;
    heading_3?: React.FC<Heading3BlockProps>;
    quote?: React.FC<QuoteBlockProps>;
    code?: React.FC<CodeBlockProps>;
    toggle?: React.FC<ToggleBlockProps>;
    to_do?: React.FC<ToDoBlockProps>;
    bulleted_list_item?: React.FC<BulletedListItemBlockProps>;
    numbered_list_item?: React.FC<NumberedListItemBlockProps>;
    image?: React.FC<ImageBlockProps>;
    video?: React.FC<VideoBlockProps>;
    bookmark?: React.FC<BookmarkBlockProps>;
    embed?: React.FC<EmbedBlockProps>;
    link_to_page?: React.FC<LinkToPageBlockProps>;
    link_preview?: React.FC<LinkPreviewBlockProps>;
    callout?: React.FC<CalloutBlockProps>;
    divider?: React.FC<DividerBlockProps>;
    column_list?: React.FC<ColumnListBlockProps>;
    column?: React.FC<ColumnBlockProps>;
    table?: React.FC<TableBlockProps>;
    template?: React.FC<TemplateBlockProps>;
    synced_block?: React.FC<SyncedBlockBlockProps>;
    table_of_contents?: React.FC<TableOfContentsBlockProps>;
    table_row?: React.FC<TableRowBlockProps>;
  };
};

/**
 * BlockProps
 */
export type Heading1BlockProps = BlockProps<Heading1BlockObject>;

export type Heading2BlockProps = BlockProps<Heading2BlockObject>;

export type Heading3BlockProps = BlockProps<Heading3BlockObject>;

export type ParagraphBlockProps = BlockProps<ParagraphBlockObject>;

export type QuoteBlockProps = BlockProps<QuoteBlockObject>;

export type BulletedListItemBlockProps =
  BlockProps<BulletedListItemBlockObject>;

export type CalloutBlockProps = BlockProps<CalloutBlockObject>;

export type ChildDatabaseBlockProps = BlockProps<ChildDatabaseBlockObject>;

export type ChildPageBlockProps = BlockProps<ChildPageBlockObject>;

export type ColumnBlockProps = BlockProps<ColumnBlockObject>;

export type NumberedListItemBlockProps =
  BlockProps<NumberedListItemBlockObject>;

export type SyncedBlockBlockProps = BlockProps<SyncedBlockBlockObject>;

export type TableBlockProps = BlockProps<TableBlockObject>;

export type TemplateBlockProps = BlockProps<TemplateBlockObject>;

export type ToDoBlockProps = BlockProps<ToDoBlockObject>;

export type ToggleBlockProps = BlockProps<ToggleBlockObject>;

export type EquationBlockProps = BlockProps<EquationBlockObject>;

export type CodeBlockProps = BlockProps<CodeBlockObject>;

export type DividerBlockProps = BlockProps<DividerBlockObject>;

export type BreadcrumbBlockProps = BlockProps<BreadcrumbBlockObject>;

export type TableOfContentsBlockProps = BlockProps<TableOfContentsBlockObject>;

export type ColumnListBlockProps = BlockProps<ColumnListBlockObject>;

export type LinkToPageBlockProps = BlockProps<LinkToPageBlockObject>;

export type TableRowBlockProps = BlockProps<TableRowBlockObject>;

export type EmbedBlockProps = BlockProps<EmbedBlockObject>;

export type BookmarkBlockProps = BlockProps<BookmarkBlockObject>;

export type ImageBlockProps = BlockProps<ImageBlockObject>;

export type VideoBlockProps = BlockProps<VideoBlockObject>;

export type PdfBlockProps = BlockProps<PdfBlockObject>;

export type FileBlockProps = BlockProps<FileBlockObject>;

export type AudioBlockProps = BlockProps<AudioBlockObject>;

export type LinkPreviewBlockProps = BlockProps<LinkPreviewBlockObject>;

export type UnsupportedBlockProps = BlockProps<UnsupportedBlockObject>;

export type AllBlockProps =
  | Heading1BlockProps
  | Heading2BlockProps
  | Heading3BlockProps
  | ParagraphBlockProps
  | QuoteBlockProps
  | BulletedListItemBlockProps
  | CalloutBlockProps
  | ChildDatabaseBlockProps
  | ChildPageBlockProps
  | ColumnBlockProps
  | NumberedListItemBlockProps
  | SyncedBlockBlockProps
  | TableBlockProps
  | TemplateBlockProps
  | ToDoBlockProps
  | ToggleBlockProps
  | EquationBlockProps
  | CodeBlockProps
  | DividerBlockProps
  | BreadcrumbBlockProps
  | TableOfContentsBlockProps
  | ColumnListBlockProps
  | LinkToPageBlockProps
  | TableRowBlockProps
  | EmbedBlockProps
  | BookmarkBlockProps
  | ImageBlockProps
  | VideoBlockProps
  | PdfBlockProps
  | FileBlockProps
  | AudioBlockProps
  | LinkPreviewBlockProps
  | UnsupportedBlockProps;

/**
 * annotation types
 */
export type MentionProps = {
  pageId: string;
  page: MentionPage;
};
