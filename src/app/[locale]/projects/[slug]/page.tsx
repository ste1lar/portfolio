import ProjectDetail from '@/features/project-detail';
import { ProjectData } from '@/shared/types/projects';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ locale: 'ko' | 'ja'; slug: string }>;
};

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;

  const t = await getTranslations({ locale, namespace: 'projects' });
  if (!t.has(slug)) notFound();

  const project = t.raw(slug) as ProjectData;

  return (
    <ProjectDetail sectionTitle={t('title')} sectionIndex={t('sectionIndex')} project={project} />
  );
}
