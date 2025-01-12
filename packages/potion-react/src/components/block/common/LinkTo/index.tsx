import React, { FC } from "react";
import "./style.css";

export type LinkToProps = {
  url: string;
  className?: string;
};

export const LinkTo: FC<LinkToProps> = ({ url, className }) => {
  return (
    <a href={url} className={`ptn-blk-link-to ${className}`}>
      {url}
    </a>
  );
};
