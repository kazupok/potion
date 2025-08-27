import type { FC } from "react";

export type LinkToProps = {
  url: string;
  className?: string;
  id?: string;
};

export const LinkTo: FC<LinkToProps> = ({ url, className, id }) => {
  return (
    <a href={url} id={id} className={`ptn-blk-link-to ${className}`}>
      {url}
    </a>
  );
};
