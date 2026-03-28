import ja from '../../messages/ja.json';
import ko from '../../messages/ko.json';

export const locales = ['ko', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ko';
export const localePrefix = 'as-needed' as const;

const messages = {
  ko,
  ja,
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getMessages(locale: Locale) {
  return messages[locale];
}
