import type { Metadata } from 'next';
import { Suspense, cache } from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/[locale]/components/mdx';
import { getViewsCount } from 'app/[locale]/db/queries';
import { getBlogPosts } from 'app/[locale]/db/blog';
import ViewCounter from '../view-counter';
import { increment } from 'app/[locale]/db/actions';
import { unstable_noStore as noStore } from 'next/cache';
import DateFormatter from './dateUtils';

interface Props {
  params: {
    slug: string;
    locale: string;
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { slug, locale } = params;
  const posts = await getBlogPosts(locale); // Ensure getBlogPosts is async
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogImage = image
    ? `https://kaio-io.vercel.app${image}`
    : `https://kaio-io.vercel.app/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://kaio-io.vercel.app/${locale}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: Props) {
  const { slug, locale } = params;
  const posts = await getBlogPosts(locale); // Ensure getBlogPosts is async
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://kaio-io.vercel.app${post.metadata.image}`
              : `https://kaio-io.vercel.app/og?title=${post.metadata.title}`,
            url: `https://kaio-io.vercel.app/${locale}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Kaio Yuri',
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <DateFormatter date={post.metadata.publishedAt} locale={locale} />
        </Suspense>
        <Suspense fallback={<p className="h-5" />}>
          <Views slug={post.slug} />
        </Suspense>
      </div>
      <Suspense>{post.metadata.summary}</Suspense>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

const incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  const views = await getViewsCount();
  incrementViews(slug);
  return <ViewCounter allViews={views} slug={slug} />;
}
