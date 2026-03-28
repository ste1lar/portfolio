import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Noto_Sans_JP, Noto_Sans_KR, Outfit } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Footer from '@/features/layout/footer';
import Header from '@/features/layout/header';
import { getMessages, isLocale } from '@/i18n/config';

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: '--font-noto-jp',
});

const notoKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: '--font-noto-kr',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

// 공통 메타데이터 (언어 상관 없이 공용)
export const metadata: Metadata = {
  title: {
    default: "ste1lar",
    template: '%s | ste1lar',
  },
  description: 'Frontend developer portfolio built with Next.js',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'ste1lar',
    siteName: 'ste1lar',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'portfolio',
      },
    ],
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

type Props = {
  children: React.ReactNode;
  // Next 15 스타일: params는 Promise
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = getMessages(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${notoJP.variable} ${notoKR.variable} ${outfit.variable}`}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-dvh flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
