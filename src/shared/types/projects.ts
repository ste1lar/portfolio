export type ProjectData = {
  name: string;
  title: string;
  period: string;
  type: string;
  description: string;
  tech: string;
  links?: {
    project?: string;
    github?: string;
    demo?: string;
  };
  note?: string;
  insight?: Record<string, string>;
};
