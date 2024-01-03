export type Repo = {
  id: number;
  homepage: string;
  name: string;
  description: string | null;
  html_url: string;
  default_branch: string;
  [key: string]: number | string | boolean | null;
};
