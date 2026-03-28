import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import type { WorkItem } from '@/shared/types/home';
import SectionHeader from '@/shared/ui/SectionHeader';

export default async function LatestWork() {
  const t = await getTranslations('home.latestWork');
  const workData = t.raw('works') as WorkItem[];

  return (
    <section aria-labelledby="latest-work-title">
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32">
            <SectionHeader
              id="latest-work-title"
              title={t('title')}
              index={t('sectionIndex')}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData.map((value) => {
                return (
                  <Link
                    key={value.slug}
                    href={`/projects/${value.slug}`}
                    className="group flex flex-col gap-3 xl:gap-6 cursor-pointer"
                  >
                    <div className="relative">
                      <Image
                        src={value.image}
                        alt={value.title}
                        width={600}
                        height={400}
                        className="rounded-lg w-full h-full object-cover"
                      />

                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute inset-0
                          rounded-lg
                          bg-black/15
                          backdrop-blur-xs
                          flex items-center justify-center
                          opacity-0
                          transition-opacity duration-200
                          group-hover:opacity-100
                        "
                      >
                        <svg
                          width="65"
                          height="64"
                          viewBox="0 0 65 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.333374"
                            width="64"
                            height="64"
                            rx="32"
                            fill="black"
                          />
                          <path
                            d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                            stroke="#FFFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="flex flex-col gap-0 xl:gap-2">
                      <h5>{value.title}</h5>
                      <p>{value.client}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
