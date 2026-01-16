'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Globe } from 'lucide-react';
import SimpleButton from './button/SimpleButton.client';

type Props = {
  textSizeClass?: string;
};

// Client Component: dropdown state + client navigation
const LocaleSwitcher = ({ textSizeClass = 'text-xs sm:text-sm md:text-base' }: Props) => {
  const locale = useLocale() as 'ko' | 'ja';
  const pathname = usePathname() || '/';
  const other = locale === 'ko' ? 'ja' : 'ko';

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <div className="relative inline-block">
      <SimpleButton type="button" onClick={toggle} className={`w-full px-4 py-2 ${textSizeClass}`}>
        <span className="inline-flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="tracking-wide">Language</span>
        </span>
      </SimpleButton>

      <div
        aria-hidden="true"
        onClick={close}
        className={
          open ? 'fixed inset-0 z-40 block' : 'fixed inset-0 z-40 pointer-events-none hidden'
        }
      />

      <div
        className={
          'absolute right-0 top-full mt-2 w-full border border-gray-200 bg-white shadow-md z-50 rounded-xl transition-all duration-200 origin-top ' +
          (open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none')
        }
      >
        <div className={`px-4 py-2 font-semibold bg-gray-100 rounded-t-xl ${textSizeClass}`}>
          {locale === 'ko' ? '한국어' : '日本語'}
        </div>

        <Link
          href={pathname}
          locale={other}
          onClick={close}
          className={`block px-4 py-2 hover:bg-gray-100 rounded-b-xl ${textSizeClass}`}
        >
          {other === 'ko' ? '한국어' : '日本語'}
        </Link>
      </div>
    </div>
  );
};

export default LocaleSwitcher;
