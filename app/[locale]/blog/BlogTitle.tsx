'use client';

import { useTranslations } from 'next-intl';

export default function BlogTitle() {
  const t = useTranslations('Blog');

  return (
    <h1 className="font-medium text-2xl mb-8 tracking-tighter">{t('title')}</h1>
  );
}
