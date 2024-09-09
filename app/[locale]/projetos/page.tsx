'use client';

import React from 'react';
import Card01 from '../../../public/images/card-01.png';
import Image from 'next/image';
import Spotlight, { SpotlightCard } from '../components/spotlight';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('Projects');
  return (
    <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-2 items-start lg:max-w-none group">
      {/* Card #1 */}
      <SpotlightCard>
        <div className="relative h-full bg-neutral-950 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          {/* <p>Tipo</p> caso seja necessário adicionar uma tag */}
          {/* Radial gradient */}
          <div
            className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-neutral-800 rounded-full blur-[80px]"></div>
          </div>
          <div className="flex flex-col h-full items-center text-center">
            {/* Image */}
            <div className="relative inline-flex">
              <div
                className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                aria-hidden="true"
              ></div>
              <Image
                className="inline-flex"
                src={Card01}
                width={200}
                height={200}
                alt="Card 01"
              />
            </div>
            {/* Text */}
            <div className="grow mb-5">
              <h2 className="text-xl text-neutral-200 font-bold mb-1">
                {t('title')}
              </h2>
              <p className="text-sm text-neutral-500">{t('description')}</p>
              <p className="text-sm text-neutral-500"> {t('update')}</p>
            </div>
            <a
              className="inline-flex justify-center items-center whitespace-nowrap rounded bg-neutral-900 hover:bg-neutral-950 border border-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-neutral-600 transition-colors duration-150"
              href="#0"
            >
              <svg
                className="mr-2"
                width="18"
                height="18"
                role="img"
                aria-label="preview"
              >
                <use href="/sprite.svg#eye" />
              </svg>
              <span>{t('visit')}</span>
            </a>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
}
