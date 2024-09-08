'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const t = useTranslations('Nav'); // Usar o mesmo hook para traduções, se necessário

  const handleLocaleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <div className="flex flex-row items-center space-x-2">
      <div
        onClick={() => handleLocaleChange('en')}
        className={`cursor-pointer transition-all hover:text-neutral-800 dark:hover:text-neutral-200  ${
          locale === 'en' ? 'font-bold' : ''
        }`}
      >
        en
      </div>
      <div
        onClick={() => handleLocaleChange('pt')}
        className={`cursor-pointer transition-all hover:text-neutral-800 dark:hover:text-neutral-200  ${
          locale === 'pt' ? 'font-bold' : ''
        }`}
      >
        pt
      </div>
    </div>
  );
};

export default LanguageSwitcher;
