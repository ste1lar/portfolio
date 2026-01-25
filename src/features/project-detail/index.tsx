import { Calendar, User, Users } from 'lucide-react';
import LinkPill from '@/shared/ui/LinkPill';
import { ProjectData } from '@/shared/types/projects';

type Props = {
  sectionTitle: string;
  sectionIndex: string;
  project: ProjectData;
};

const formatKey = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, (c) => c.toUpperCase());

export default function ProjectDetail({ sectionTitle, sectionIndex, project }: Props) {
  const { title, period, type, description, tech, links = {}, note, insight = {} } = project;

  const techList = (tech ?? '')
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);

  const noteLines = (note ?? '')
    .split('\n')
    .map((v) => v.trim())
    .filter(Boolean);

  const TypeIcon = type.startsWith('Personal') ? User : Users;

  return (
    <main className="min-h-dvh pt-28 md:pt-32">
      <section aria-labelledby="project-detail-title">
        <div className="container">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2 id="project-detail-title">{sectionTitle}</h2>
            <p className="text-xl text-black">{sectionIndex}</p>
          </div>

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

          {Object.keys(insight).length > 0 && (
            <div className="space-y-10 md:space-y-12 border-t border-mistGray py-12 md:py-16">
              {Object.entries(insight).map(([key, value], index) => (
                <section key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="no-print w-3.5 h-3.5 rounded-full border border-black bg-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    </div>
                    <h5>{formatKey(key)}</h5>
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
