export const projectInsightKeys = ['motive', 'problemSolving', 'learned'] as const;

export type ProjectInsightKey = (typeof projectInsightKeys)[number];
export type ProjectKind = 'personal' | 'team';

export type ProjectData = {
  name: string;
  kind: ProjectKind;
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
  insight?: Partial<Record<ProjectInsightKey, string>>;
};
