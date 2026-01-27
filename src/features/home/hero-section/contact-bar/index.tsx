import { getTranslations } from "next-intl/server";
import Image from "next/image";
import EmailLink from "./EmailLink.client";

type ContactItem = {
  type: "email" | "phone" | "location";
  label: string;
  icon: string;
  link: string;
};

type SocialItem = {
  platform: "github" | "linkedin" | string; // 나중에 늘릴 수 있으니 일단 string 허용
  icon: string;
  link: string;
};

export default async function ContactBar() {
  const t = await getTranslations("home.contactBar");

  const contactItems = t.raw("contactItems") as ContactItem[];
  const socialItems = t.raw("socialItems") as SocialItem[];

  return (
    <section aria-labelledby="contact-bar-title">
      <h2 id="contact-bar-title" className="sr-only">
        Contact
      </h2>

      <div className="border-t border-softGray">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
            {/* Contact Items */}
            <div
              className="
              flex flex-wrap
              items-center
              justify-center
              gap-1.5
              md:justify-start md:gap-5
              lg:gap-11
            "
            >
              {contactItems.map((value: any, index: number) => {
                if (value.type === "email") {
                  return <EmailLink key={index} value={value} />;
                }

                return (
                  <a
                    key={index}
                    href={value.link}
                    target={value.type === "location" ? "_blank" : undefined}
                    rel={
                      value.type === "location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-2 lg:gap-4 text-sm md:text-base hover:opacity-50 transition-opacity duration-200"
                  >
                    <Image
                      src={value.icon}
                      alt={value.type}
                      width={24}
                      height={24}
                      className="min-w-[24px] min-h-[24px]"
                    />
                    <h6 className="text-sm md:text-base xl:text-xl">
                      {value.label}
                    </h6>
                  </a>
                );
              })}
            </div>

            {/* Social Items */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
              {socialItems.map((value: any, index: number) => (
                <a
                  key={index}
                  href={value.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-50 transition-opacity duration-200"
                >
                  <Image
                    src={value.icon}
                    alt={value.platform}
                    width={30}
                    height={30}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
