import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  metadataBase: new URL('https://kaio-io.vercel.app/'),
  title: {
    default: 'Kaio Yuri',
    template: '%s | Kaio Yuri',
  },
  description: 'Developer, designer, and data engineer.',
  openGraph: {
    title: 'Kaio Yuri',
    description: 'Developer, designer, and data engineer.',
    url: 'https://kaio-io.vercel.app/',
    siteName: 'Kaio Yuri',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Kaio Yuri',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

const locales = ['en', 'pt'];

async function loadMessages(locale: string) {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale "${locale}":`, error);
    return {};
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await loadMessages(locale);

  return (
    <html
      lang={locale}
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col mx-4 mt-8 lg:mx-auto">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar messages={messages} />
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
