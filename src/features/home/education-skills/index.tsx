import { getTranslations } from 'next-intl/server';
import SkillCard from '@/features/home/education-skills/SkillCard';
import type { EducationItem, SkillItem } from '@/shared/types/home';
import SectionHeader from '@/shared/ui/SectionHeader';
import TimelineDot from '@/shared/ui/TimelineDot';

export default async function EducationSkills() {
  const t = await getTranslations('home.educationSkills');

  const education = t.raw('education') as EducationItem[];
  const skills = t.raw('skills') as SkillItem[];

  const mainSkills = skills.slice(0, 6);
  const extraSkills = skills.slice(6);

  return (
    <section aria-labelledby="education-skills-title">
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <div className="relative z-10 py-16 md:py-32">
            <SectionHeader
              id="education-skills-title"
              title={t('title')}
              index={t('sectionIndex')}
              className="mb-9 xl:mb-16"
            />

            <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20 mb-5 lg:mb-16">
              <div className="w-full lg:max-w-md flex flex-col gap-4 xl:gap-8">
                <ul className="contents">
                  {education.map((value, index) => (
                    <li key={index} className="flex items-start gap-6">
                      <TimelineDot filled className="mt-2.5" />

                      <div className="flex-1 flex flex-col gap-2">
                        <h5>{value.title}</h5>
                        <p className="font-normal">{value.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full">
                <ul className="contents">
                  {mainSkills.map((value) => (
                    <SkillCard
                      key={value.name}
                      skill={value}
                      ratingAriaLabel={`${value.name} rating ${value.rating} out of 5`}
                    />
                  ))}
                </ul>
              </div>
            </div>

            {extraSkills.length > 0 && (
              <div className="lg:pt-16 lg:border-t lg:border-t-mistGray">
                <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-6 gap-5 xl:gap-7 w-full">
                  <ul className="contents">
                    {extraSkills.map((value) => (
                      <SkillCard
                        key={value.name}
                        skill={value}
                        ratingAriaLabel={`${value.name} rating ${value.rating} out of 5`}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
