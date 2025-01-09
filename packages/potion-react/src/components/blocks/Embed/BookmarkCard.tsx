import { cn } from "@/lib/shadcn/utils";
import type { FC } from "react";

interface BookmarkCardProps {
  url: URL;
  metadata: {
    title?: string;
    description?: string;
    image?: string;
  } | null;
}

export const BookmarkCard: FC<BookmarkCardProps> = ({ url, metadata }) => {
  return (
    <div className={cn("flex w-full max-w-full overflow-hidden text-[0.9rem]")}>
      <a
        href={url.toString()}
        target="_blank"
        rel="noopener noreferrer"
        className="box-border flex w-full select-none overflow-hidden rounded-[3px] border border-[rgba(55,53,47,0.16)] no-underline"
      >
        <div className="flex-[4_1_180px] overflow-hidden p-3 text-left text-[--fg]">
          <div className="mb-0.5 min-h-6 w-[120px] min-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-5">
            {metadata?.title}
          </div>
          <div className="h-8 overflow-hidden text-[0.65rem] leading-4 opacity-50">
            {metadata?.description}
          </div>
          <div className="mt-1.5 flex items-center">
            <div className="mr-1.5 h-3 w-3 min-w-3">
              <img
                src={`https://www.google.com/s2/favicons?domain=${url.hostname}`}
                alt="Favicon of the bookmark site"
                loading="lazy"
                className="max-w-full"
              />
            </div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[--fg] text-xs leading-4">
              {url.origin}
            </div>
          </div>
        </div>
        <div className="relative hidden flex-[1_1_180px] md:block">
          {metadata?.image && (
            <img
              src={metadata.image}
              // biome-ignore lint/a11y/noRedundantAlt: <explanation>
              alt="Site image of the bookmark"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>
      </a>
    </div>
  );
};
