import { cookies } from 'next/headers'

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Meu portifolio</h1>
      <p className="prose prose-neutral dark:prose-invert">
         Oi, meu nome é Kaio Yuri 👋
      </p>
      <p className="prose prose-neutral dark:prose-invert">
         Bem vindo ao meu portifólio.
      </p>
    </section>
  );
}


