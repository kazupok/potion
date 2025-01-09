import { pathJoin } from "../utils/path-join";

export type GetFilePathProps = {
  basePath: string;
  url: URL;
};

export const getFilePath = ({ basePath, url }: GetFilePathProps): string => {
  const [dir, filename] = url.pathname.split("/").slice(-2);
  return pathJoin(basePath, `/notion/${dir}/${filename}`);
};
