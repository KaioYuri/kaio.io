import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://kaio-io.vercel.app/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/guestbook', '/uses', '/experiencia'].map((route) => ({
    url: `https://kaio-io.vercel.app/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
