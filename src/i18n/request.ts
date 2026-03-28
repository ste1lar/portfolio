import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, getMessages, isLocale } from '@/i18n/config';

export default getRequestConfig(async ({ requestLocale }) => {
  const raw = (await requestLocale) ?? defaultLocale;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const messages = getMessages(locale);

  return {
    locale,
    messages,
  };
});
