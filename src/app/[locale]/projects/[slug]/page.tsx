import ProjectDetail from '@/features/project-detail';
import { type Locale } from '@/i18n/config';
import { ProjectData } from '@/shared/types/projects';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
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
