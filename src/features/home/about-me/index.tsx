import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Stat = { count: string; label: string };

export default async function AboutMe() {
  const t = await getTranslations("home.aboutMe");
  const stats = t.raw("stats") as Stat[];
  const languages = t.raw("languages") as string[];

  return (
    <section aria-labelledby="about-me-title">
      <div className="relative bg-softGray py-10 md:py-32">
        {/* Background image (decorative) */}
        <div className="absolute top-0 w-full px-9" aria-hidden="true">
          <Image
            src="/images/home/about-me/ste1lar-bg-img.svg"
            alt=""
            width={1480}
            height={240}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            {/* Section header */}
            <header className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2 id="about-me-title">{t("title")}</h2>
              <p className="text-xl text-black">{t("sectionIndex")}</p>
            </header>

            <article className="pt-10 xl:pt-16">
              {/* 소개 */}
              <p>{t("description")}</p>

              {/* 통계 (list) */}
              <ul className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                {stats.map((item, i) => (
                  <li key={i}>
                    <h3>{item.count}</h3>
                    <p className="text-base md:text-lg text-black">
                      {item.label}
                    </p>
                  </li>
                ))}
              </ul>

              {/* 언어 */}
              <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-3.5">
                  <Image
                    src="/images/icon/lang-icon.svg"
                    alt="lang-icon"
                    width={30}
                    height={30}
                  />
                  <p className="text-base xl:text-xl text-black">Language</p>
                </div>

                <ul className="flex flex-wrap justify-center items-center gap-2.5">
                  {languages.map((lang) => (
                    <li key={lang}>
                      <p className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl">
                        {lang}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
