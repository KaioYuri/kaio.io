import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "app/components/ui/hover-card";

import { CalendarDays } from "lucide-react";
import { Button } from "app/components/ui/button";

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
  return (
    <section>
      <h1 className="font-medium text-2xl mb-4 tracking-tighter">Meu trabalho</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Tenho a missão de participar ativamente em projetos de softwares
          ambiciosos, e aprender continuamente com cada desafio que estiver
          envolvido.
        </p>
        <hr className="my-4 border-neutral-100 dark:border-neutral-800" />
        <div className="h-20 flex justify-between items-baseline">
          <h2 className=" pb-0 font-medium text-xl tracking-tighter">Dataprev</h2>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            outubro de 2023 - até o momento
          </span>
        </div>
        <p className=" text-neutral-600 dark:text-neutral-400 text-sm mt-0">
          Estagiário de Engenharia de dados
        </p>
        <p>
          Entrei na <a href="https://www.dataprev.gov.br">Dataprev</a> em outubro de 2023{' '}
          com um pouco mais de experiência e fiquei animado com projetos
          realizados em cima de dados. Trabalhei em demandas desafiadoras, como:
        </p>
        <ul className="list-disc list-inside">
          <li> Framework{' '}
            <HoverCardDemo
              nome="PySpark"
              descricao="PySpark é uma API Python para Apache SPARK que é denominado como o mecanismo de processamento analítico para aplicações de processamento de dados distribuídos em larga escala e aprendizado de máquina, ou seja, para grandes volumes de dados."
            />
            : desenvolvi evoluções para o software, documentei e dei apoio a
            clientes que fazem uso da ferramenta.
          </li>
          <li>
            Observatório de dados: Projeto de <a href="https://vercel.com/home">web scraping</a> de diversas fontes de dados com automação a fim de fornecer dados que serão alimentados por dashboards no observatório de igualdade de gênero.
          </li>
        </ul>
        <hr className="my-4 border-neutral-100 dark:border-neutral-800" />
        <div className="h-20 flex justify-between items-baseline">
          <h2 className=" pb-0 font-medium text-xl tracking-tighter">Dataprev</h2>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            outubro de 2023 - até o momento
          </span>
        </div>
        <p className=" text-neutral-600 dark:text-neutral-400 text-sm mt-0">
          Estagiário de Engenharia de dados
        </p>
        <p>
          Entrei na <a href="https://www.dataprev.gov.br">Dataprev</a> em outubro de 2023{' '}
          com um pouco mais de experiência e fiquei animado com projetos
          realizados em cima de dados. Trabalhei em demandas desafiadoras, como:
        </p>
        <ul className="list-disc list-inside">
          <li> Framework{' '}
            <HoverCardDemo
              nome="PySpark"
              descricao="PySpark é uma API Python para Apache SPARK que é denominado como o mecanismo de processamento analítico para aplicações de processamento de dados distribuídos em larga escala e aprendizado de máquina, ou seja, para grandes volumes de dados."
            />
            : desenvolvi evoluções para o software, documentei e dei apoio a
            clientes que fazem uso da ferramenta.
          </li>
          <li>
            Observatório de dados: Projeto de <a href="https://vercel.com/home">web scraping</a> de diversas fontes de dados com automação a fim de fornecer dados que serão alimentados por dashboards no observatório de igualdade de gênero.
          </li>
        </ul>
      </div>
      
    </section>
  );
}
