export type StatItem = {
  count: string;
  label: string;
};

export type ContactItemType = 'email' | 'phone' | 'location';

export type ContactItem = {
  type: ContactItemType;
  label: string;
  icon: string;
  link: string;
};

export type SocialItem = {
  platform: string;
  icon: string;
  link: string;
};

export type WorkItem = {
  image: string;
  title: string;
  client: string;
  slug: string;
};

export type ExperienceItem = {
  year: string;
  title: string;
  company: string;
  type: string;
  description: string;
};

export type EducationItem = {
  title: string;
  description: string;
};

export type SkillItem = {
  name: string;
  icon: string;
  rating: number;
};
