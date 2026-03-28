'use client';

import Image from 'next/image';
import type { ContactItem } from '@/shared/types/home';

type Props = {
  value: ContactItem;
};

const EmailLink = ({ value }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(value.label)}`,
      '_blank',
    );
  };

  return (
    <a
      href={value.link}
      onClick={handleClick}
      className="flex items-center gap-2 lg:gap-4 text-sm md:text-base hover:opacity-50 transition-opacity duration-200"
    >
      <Image
        src={value.icon}
        alt={value.type}
        width={24}
        height={24}
        className="min-w-[24px] min-h-[24px]"
      />
      <h6 className="text-sm md:text-base xl:text-xl">{value.label}</h6>
    </a>
  );
};

export default EmailLink;
