"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'início',
  },
  '/trabalho': {
    name: 'trabalho',
  },
  '/projetos': {
    name: 'projetos',
  },
  '/blog': {
    name: 'blog',
  },
  '/guestbook': {
    name: 'guestbook',
  }
};

export function Navbar() {
  const pathname = usePathname();

  // Supondo que o locale esteja no início da URL, como "/en", "/pt", etc.
  const locale = pathname.split('/')[1] || 'pt'; // Define o locale padrão como 'pt'

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={`/${locale}${path}`}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 ${
                    pathname === `/${locale}${path}` ? 'font-bold' : ''
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
