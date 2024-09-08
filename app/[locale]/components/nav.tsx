'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher'; // Importando o LanguageSwitcher

interface NavbarProps {
  messages: Record<string, string>; // Ajuste conforme necessário
}

export function Navbar({ messages }: NavbarProps) {
  const t = useTranslations('Nav');

  const navItems = {
    '/': {
      name: t('home'),
    },
    '/trabalho': {
      name: t('work'),
    },
    '/projetos': {
      name: t('projects'),
    },
    '/blog': {
      name: 'blog',
    },
    '/guestbook': {
      name: 'guestbook',
    },
  };

  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'pt'; // Define o locale padrão como 'pt'

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={`/${locale}${path}`}
                className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 ${
                  pathname === `/${locale}${path}` ? 'font-bold' : ''
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
          {/* Adicionando o LanguageSwitcher */}
          <div className="flex flex-row items-center ml-auto space-x-4 py-1 px-2">
            <LanguageSwitcher locale={locale} />
          </div>
        </nav>
      </div>
    </aside>
  );
}
