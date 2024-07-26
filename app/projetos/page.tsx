import React  from 'react';
import Card01 from '../../public/images/card-01.png';
import Image from 'next/image';
import  Spotlight , { SpotlightCard } from '../components/spotlight';

export default function Page(){
    return (
<Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-2 items-start lg:max-w-none group">
  {/* Card #1 */}
  <SpotlightCard>
    <div className="relative h-full bg-neutral-950 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
      <p>Tipo</p>
      {/* Radial gradient */}
      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-neutral-800 rounded-full blur-[80px]"></div>
      </div>
      <div className="flex flex-col h-full items-center text-center">
        {/* Image */}
        <div className="relative inline-flex">
          <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
          <Image className="inline-flex" src={Card01} width={200} height={200} alt="Card 01" />
        </div>
        {/* Text */}
        <div className="grow mb-5">
          <h2 className="text-xl text-neutral-200 font-bold mb-1">Amazing Integration</h2>
          <p className="text-sm text-neutral-500">Quickly apply filters to refine your issues lists and create custom views.</p>
        </div>
        <a className="inline-flex justify-center items-center whitespace-nowrap rounded bg-neutral-900 hover:bg-neutral-950 border border-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-neutral-600 transition-colors duration-150" href="#0">
          <svg className="fill-neutral-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
            <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
          </svg>
          <span>Connect</span>
        </a>
      </div>
    </div>
  </SpotlightCard>
</Spotlight>
    );
}
