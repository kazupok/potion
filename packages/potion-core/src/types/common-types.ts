import type { Client } from "@notionhq/client";

export type Metadata = {
  title?: string;
  description?: string;
  image?: string;
};

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

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type GetMentionPage = (pageId: string) => Promise<any>;
export type GetMetadata = (url: URL) => Promise<Metadata | null>;

export type GetAllBlocksByBlockIdProps = {
  client: Client;
  blockId: string;
  level?: number;
  options?: {
    disableGetMentionPage?: boolean;
    disableGetMetadata?: boolean;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    getMentionPage?: (pageId: string) => Promise<any>;
    getMetadata?: (url: URL) => Promise<Metadata | null>;
    imageHandler?: (url: URL) => Promise<URL>;
  };
};
