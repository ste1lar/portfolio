import { Calendar, User, Users } from 'lucide-react';
import LinkPill from '@/shared/ui/LinkPill';
import SectionHeader from '@/shared/ui/SectionHeader';
import TimelineDot from '@/shared/ui/TimelineDot';
import { ProjectData, projectInsightKeys } from '@/shared/types/projects';

type Props = {
  sectionTitle: string;
  sectionIndex: string;
  project: ProjectData;
};

const insightLabels = {
  motive: 'Motive',
  problemSolving: 'Problem Solving',
  learned: 'Learned',
} as const;

export default function ProjectDetail({ sectionTitle, sectionIndex, project }: Props) {
  const { title, period, kind, type, description, tech, links = {}, note, insight = {} } = project;

  const techList = (tech ?? '')
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);

  const noteLines = (note ?? '')
    .split('\n')
    .map((v) => v.trim())
    .filter(Boolean);

  const TypeIcon = kind === 'personal' ? User : Users;
  const insightEntries = projectInsightKeys.flatMap((key) =>
    insight[key] ? [{ key, value: insight[key] as string }] : [],
  );

  return (
    <main className="min-h-dvh pt-28 md:pt-32">
      <section aria-labelledby="project-detail-title">
        <div className="container">
          <SectionHeader
            id="project-detail-title"
            title={sectionTitle}
            index={sectionIndex}
          />

          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 mb-12 md:mb-16">
            <div className="flex-1 space-y-5">
              <h4>{title}</h4>
              <p className="whitespace-pre-line leading-7 md:leading-8">{description}</p>

              {noteLines.length > 0 && (
                <div className="bg-softGray px-4 py-3">
                  {noteLines.map((line, i) => (
                    <p className="text-sm text-gray-500" key={i}>
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <aside className="w-full lg:max-w-xs space-y-6">
              <div className="space-y-2">
                <h5>Period</h5>
                <div className="flex items-center gap-2 text-base text-gray-600">
                  <Calendar className="w-4 h-4 shrink-0" />
                  {period}
                </div>
              </div>

              <div className="space-y-2">
                <h5>Role / Type</h5>
                <div className="flex items-center gap-2 text-base text-gray-600">
                  <TypeIcon className="w-4 h-4 shrink-0" />
                  {type}
                </div>
              </div>

              <div className="space-y-2">
                <h5>Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {techList.map((stack, i) => (
                    <span
                      key={i}
                      className="border border-softGray rounded-full px-3 py-1 text-base bg-white"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              {(links.project || links.github || links.demo) && (
                <div className="space-y-2 pt-1">
                  <h5>Links</h5>
                  <div className="flex flex-wrap gap-3 text-sm md:text-base">
                    {links.github && <LinkPill label="GitHub" href={links.github} icon="github" />}
                    {links.project && (
                      <LinkPill label="Project" href={links.project} icon="external" />
                    )}
                    {links.demo && <LinkPill label="Demo" href={links.demo} icon="external" />}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {insightEntries.length > 0 && (
            <div className="space-y-10 md:space-y-12 border-t border-mistGray py-12 md:py-16">
              {insightEntries.map(({ key, value }) => (
                <section key={key} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <TimelineDot filled />
                    <h5>{insightLabels[key]}</h5>
                  </div>
                  <p className="whitespace-pre-line leading-7 md:leading-8">{value}</p>
                </section>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
