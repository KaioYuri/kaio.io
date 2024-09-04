import { getBlogPosts } from 'app/[locale]/db/blog';

const locales = ['en', 'pt']; // Adicione todos os idiomas suportados

export default async function sitemap() {
  const blogs = await getBlogPosts();

  // Declara o tipo explícito para o sitemap
  let sitemap: { url: string; lastModified: string }[] = [];

  // Para cada locale, geramos as rotas estáticas e de blog
  locales.forEach((locale) => {
    // Rotas estáticas para cada locale
    const routes = ['', '/blog', '/guestbook', '/uses', '/trabalho', '/projetos'].map((route) => ({
      url: `https://kaio-io.vercel.app/${locale}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }));

    // Rotas de blog para cada locale
    const localizedBlogs = blogs.map((post) => ({
      url: `https://kaio-io.vercel.app/${locale}/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }));

    // Adiciona as rotas ao sitemap
    sitemap = [...sitemap, ...routes, ...localizedBlogs];
  });

  return sitemap;
}
