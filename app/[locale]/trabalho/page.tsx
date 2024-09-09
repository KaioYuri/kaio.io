import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from 'app/[locale]/components/ui/hover-card';

import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Trabalho',
  description: 'Venha conhecer um pouco por onde ja passei.',
};

interface HoverCardDemoProps {
  nome: string;
  descricao: string;
}

function HoverCardDemo({ nome, descricao }: HoverCardDemoProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a className="underline decoration-dashed" href="link">
          {nome}
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-white-0 bg-opacity-30 backdrop-blur-sm rounded-lg p-4 backdrop-blur-2xl border border-neutral-200 border-opacity-30 rounded md:p-10 dark:border-neutral-700">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">{nome}</h4>
          <p className="text-sm">{descricao}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function Page() {
  const t = useTranslations('Work');
  return (
    <section>
      <h1 className="font-medium text-2xl mb-4 tracking-tighter">
        {t('title')}
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>{t('about')}</p>
        <hr className="my-4 border-neutral-100 dark:border-neutral-800" />
        <div className="h-20 flex justify-between items-baseline">
          <h2 className="pb-0 font-medium text-xl tracking-tighter">
            Dataprev
          </h2>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            {t('time-job-1')}
          </span>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-0">
          {t('position-1')}
        </p>
        <p>
          {t('description-job-1')}
          <a href="https://www.dataprev.gov.br" target="_blank">
            Dataprev
          </a>
          {t('description2-job-1')}
        </p>
        <ul className="list-disc list-inside">
          <li>
            Framework{' '}
            <a
              href="https://www.databricks.com/br/glossary/pyspark"
              target="_blank"
            >
              PySpark
            </a>
            : {t('about-job-1')}
          </li>
          <li>
            {t('about2-job-1')}
            <a
              href="https://canaltech.com.br/seguranca/o-que-e-web-scraping/"
              target="_blank"
            >
              web scraping
            </a>{' '}
            {t('about3-job-1')}
          </li>
        </ul>
        <hr className="my-4 border-neutral-100 dark:border-neutral-800" />
        <div className="h-20 flex justify-between items-baseline">
          <h2 className="pb-0 font-medium text-xl tracking-tighter">INPE</h2>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            {t('time-job-2')}
          </span>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-0">
          {t('position-2')}
        </p>
        <p>
          {t('description-job-2')}
          <a href="https://www.gov.br/inpe/pt-br" target="_blank">
            INPE
          </a>
          {t('description2-job-2')}
        </p>
        <ul className="list-disc list-inside">
          <li>
            {t('about-job-2')}
            <a href="https://angular.dev/" target="_blank">
              Angular 16
            </a>
            {t('about2-job-2')}
          </li>
          <li>{t('about3-job-2')}</li>
          <li className="prose prose-neutral dark:prose-invert">
            {t('about4-job-2')}
          </li>
        </ul>
      </div>
    </section>
  );
}
