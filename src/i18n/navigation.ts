import { createNavigation } from 'next-intl/navigation';
import { defaultLocale, localePrefix, locales } from '@/i18n/config';

export const { Link, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
  localePrefix,
});
