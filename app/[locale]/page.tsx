import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
import ViewCounter from './blog/view-counter';
import { getViewsCount, getKaioYouTubeSubs } from './db/queries';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './components/ui/hover-card';
import { Button } from './components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { CalendarDays } from 'lucide-react';
import { PreloadResources } from './preload';
import pub from 'public/images/img1.jpg';
import shop from 'public/images/img2.jpeg';
import gorn from 'public/images/img3.jpeg';
import dev from 'public/images/img4.jpeg';
import mel from 'public/images/img5.jpeg';
import sol from 'public/images/img6.jpg';

import { HoverCardFollow } from './components/hover-card-comp';
import avatar from './avatar.jpg';
import { useTranslations } from 'next-intl';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}
interface HoverCardDemoProps {
  nome: string;
  descricao: string;
}
function HoverCardDemo({ nome, descricao }: HoverCardDemoProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{nome}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

// async function Subs({ name }: { name: string }) {
//   noStore();
//   let subscribers;
//   if (name === '@leerob') {
//     subscribers = await getKaioYouTubeSubs();
//   }

//   return (
//     <p className="text-neutral-600 dark:text-neutral-400">
//       {subscribers} inscritos
//     </p>
//   );
// }

function BlogLink({ slug, name, locale }) {
  return (
    <div className="group">
      <a
        href={`/${locale}/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            {/* <Suspense fallback={<p className="h-6" />}>
              <Subs name={name} />
            </Suspense> */}
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const t = useTranslations('Home');

  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        {t('title')} 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {t('description-1')}
        <Link href={`${locale}/trabalho`}>{t('working')}</Link>
        {t('description-2')}
        <span className="not-prose">
          <Badge href="https://www.dataprev.gov.br">
            <img
              alt="Dataprev logomark"
              src="/dataprev-removebg-preview.png"
              className="!mr-1"
              width="14"
              height="14"
            />
            Dataprev
          </Badge>
        </span>
        {t('description-3')}
        <Badge href="https://www.python.org/">
          <img
            alt="Python logomark"
            src="/python.svg"
            className="!mr-1"
            width="13"
            height="13"
          />
          Python
        </Badge>
        .
      </p>
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Eu em um pub de Natal/RN"
            src={pub}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt=" "
            src={shop}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt=" "
            src={dev}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Minha segunda vez no evento de tecnologia GO!RN, desta vez como profissional de TI."
            src={gorn}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Eu e minha cachorrinha, Mel"
            src={mel}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Meu primeiro estágio na área de TI."
            src={sol}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>{t('about-me')}</p>
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={avatar}
          name="@kaioyuri99"
          link="https://www.youtube.com/@kaioyuri99"
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>{t('about-blog')}</p>
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        <h2>{t('featured')}</h2>
        <BlogLink
          name={t('post-blog-1')}
          slug="nextjs-api-spotify"
          locale={locale}
        />
        <BlogLink
          name={t('post-blog-2')}
          slug="docker-introducao"
          locale={locale}
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>{t('about-tecnologies')}</p>
      </div>
      <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://nextjs.org/">
            <svg width="78" height="20" role="img" aria-label="Nextjs logo">
              <use href="/sprite.svg#nextjs-logo" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://supabase.com">
            <svg width="100" height="19" role="img" aria-label="Supabase logo">
              <use href="/sprite.svg#supabase" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://www.makeswift.com/">
            <svg width="96" height="19" role="img" aria-label="Makeswift logo">
              <use href="/sprite.svg#makeswift" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://idx.google.com/">
            <svg
              width="35"
              height="27"
              role="img"
              aria-label="IDX Project logo"
            >
              <use href="/sprite.svg#idx_project" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://bun.sh">
            <svg width="35" height="27" role="img" aria-label="Bun logo">
              <use href="/sprite.svg#bun" />
            </svg>
          </a>
        </div>
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/kaiioyuri"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">{t('follow-me')}</p>
          </a>
        </li>
      </ul>
      <footer className="prose prose-neutral dark:prose-invert text-center mt-20">
        {t('made')}⚡️
        <a href="https://github.com/kaioyuri" target="_blank">
          <HoverCardFollow
            avatar="https://avatars.githubusercontent.com/u/57446721?s=400&u=c18a76cffdcfb85bad5b809f41b9edb3414cdd6a&v=4"
            arroba="kaioyuri"
            descricao={t('profile-description')}
            data={t('profile-time')}
          />
        </a>
      </footer>
    </section>
  );
}
