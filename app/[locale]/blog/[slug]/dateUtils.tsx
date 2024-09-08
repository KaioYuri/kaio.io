'use client'; // Adicione isso para indicar que é um componente do cliente

import { useTranslations } from 'next-intl';

interface DateFormatterProps {
  date: string;
  locale: string;
}

const DateFormatter: React.FC<DateFormatterProps> = ({ date, locale }) => {
  const t = useTranslations('Post');

  const currentDate = new Date().getTime();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date).getTime();
  const timeDifference = Math.abs(currentDate - targetDate);
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const fullDate = new Date(date).toLocaleString(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (daysAgo < 1) {
    return <>{t('Today')}</>;
  } else if (daysAgo === 1) {
    return <>{`${fullDate} ${t('yesterday')}`}</>;
  } else if (daysAgo < 7) {
    return <>{`${fullDate} (${daysAgo} ${t('days')})`}</>;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return (
      <>{`${fullDate} (${weeksAgo} ${t('week')}${weeksAgo > 1 ? 's' : ''} ${t('ago')})`}</>
    );
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return (
      <>{`${fullDate} (${monthsAgo} ${t('month')}${monthsAgo > 1 ? t('s') : ''} ${t('ago')})`}</>
    );
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return (
      <>{`${fullDate} (${yearsAgo} ${t('year')}${yearsAgo > 1 ? 's' : ''} ${t('ago')})`}</>
    );
  }
};

export default DateFormatter;
