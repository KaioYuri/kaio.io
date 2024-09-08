import { getBlogPosts } from 'app/[locale]/db/blog';

const locales = ['en', 'pt']; // Adicione todos os idiomas suportados

export default async function sitemap() {

  let sitemap: { url: string; lastModified: string }[] = [];

  for (const locale of locales) {
    const routes = [
      '',
      '/blog',
      '/guestbook',
      '/uses',
      '/trabalho',
      '/projetos',
    ].map((route) => ({
      url: `https://kaio-io.vercel.app/${locale}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }));

    const blogs = await getBlogPosts(locale);

    const localizedBlogs = blogs.map((post) => ({
      url: `https://kaio-io.vercel.app/${locale}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }));

    // Adiciona as rotas ao sitemap
    sitemap = [...sitemap, ...routes, ...localizedBlogs];
  }

  return sitemap;
}
