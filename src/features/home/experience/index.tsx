import { getTranslations } from 'next-intl/server';
import type { ExperienceItem } from '@/shared/types/home';
import SectionHeader from '@/shared/ui/SectionHeader';
import TimelineDot from '@/shared/ui/TimelineDot';

export default async function Experience() {
  const t = await getTranslations('home.experiences');
  const experiences = t.raw('items') as ExperienceItem[];

  return (
    <section aria-labelledby="experience-title">
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader id="experience-title" title={t('title')} index={t('sectionIndex')} />

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => {
              const isLatest = index === 0;

              return (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
                >
                  <div>
                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                    <h4 className="text-lg font-normal">{exp.title}</h4>
                  </div>

                  <div className="relative">
                    {index < experiences.length && (
                      <div
                        aria-hidden="true"
                        className={`absolute left-0 top-3 w-px ${
                          index < experiences.length - 1 ? 'h-40' : 'h-30'
                        } bg-softGray`}
                      />
                    )}

                    <div
                      aria-hidden="true"
                      className="no-print absolute left-0 top-0 transform -translate-x-1/2"
                    >
                      <TimelineDot filled={isLatest} />
                    </div>

                    <div className="pl-4 lg:pl-7">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl text-black font-normal">{exp.company}</span>
                      </div>
                      <p className="text-base font-normal">{exp.type}</p>
                    </div>
                  </div>

                  <div className="pl-8 sm:pl-0">
                    <p className="text-base">{exp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
