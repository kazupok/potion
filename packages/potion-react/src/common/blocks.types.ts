// type BaseBlockProps<T extends BlockObject> = {
//   block: T & { Children?: BlockObject[] };
//   blockComponentMap: BlockComponentMap;
// };

// export type ComponentType<T extends BlockObject> = React.ComponentType<
//   BaseBlockProps<T>
// >;

// export type BlockComponentMap = {
//   [K in BlockObject["type"]]?: ComponentType<Extract<BlockObject, { type: K }>>;
// };

// export type Heading1BlockProps = ComponentType<Heading1BlockObject>;

// export type Heading2BlockProps = ComponentType<Heading2BlockObject>;

// export type Heading3BlockProps = ComponentType<Heading3BlockObject>;

// export type ParagraphBlockProps = ComponentType<ParagraphBlockObject>;

// export type QuoteBlockProps = ComponentType<QuoteBlockObject>;

// export type BulletedListItemBlockProps =
//   ComponentType<BulletedListItemBlockObject>;

// export type CalloutBlockProps = ComponentType<CalloutBlockObject>;

// export type ChildDatabaseBlockProps = ComponentType<ChildDatabaseBlockObject>;

// export type ChildPageBlockProps = ComponentType<ChildPageBlockObject>;

// export type ColumnBlockProps = ComponentType<ColumnBlockObject>;

// export type NumberedListItemBlockProps =
//   ComponentType<NumberedListItemBlockObject>;

// export type SyncedBlockBlockProps = ComponentType<SyncedBlockBlockObject>;

// export type TableBlockProps = ComponentType<TableBlockObject>;

// export type TemplateBlockProps = ComponentType<TemplateBlockObject>;

// export type ToDoBlockProps = ComponentType<ToDoBlockObject>;

// export type ToggleBlockProps = ComponentType<ToggleBlockObject>;

// export type EquationBlockProps = ComponentType<EquationBlockObject>;

// export type CodeBlockProps = ComponentType<CodeBlockObject>;

// export type DividerBlockProps = ComponentType<DividerBlockObject>;

// export type BreadcrumbBlockProps = ComponentType<BreadcrumbBlockObject>;

// export type TableOfContentsBlockProps =
//   ComponentType<TableOfContentsBlockObject>;

// export type ColumnListBlockProps = ComponentType<ColumnListBlockObject>;

// export type LinkToPageBlockProps = ComponentType<LinkToPageBlockObject>;

// export type TableRowBlockProps = ComponentType<TableRowBlockObject>;

// export type EmbedBlockProps = ComponentType<EmbedBlockObject>;

// export type BookmarkBlockProps = ComponentType<BookmarkBlockObject>;

// export type ImageBlockProps = ComponentType<ImageBlockObject>;

// export type VideoBlockProps = ComponentType<VideoBlockObject>;

// export type PdfBlockProps = ComponentType<PdfBlockObject>;

// export type FileBlockProps = ComponentType<FileBlockObject>;

// export type AudioBlockProps = ComponentType<AudioBlockObject>;

// export type LinkPreviewBlockProps = ComponentType<LinkPreviewBlockObject>;

// export type UnsupportedBlockProps = ComponentType<UnsupportedBlockObject>;
