import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "app/[locale]/components/ui/hover-card";


import { CalendarDays } from "lucide-react";
import { Button } from "app/[locale]/components/ui/button";

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
          Entrei na <a href="https://www.dataprev.gov.br" target="_blank">Dataprev</a> em outubro de 2023{' '}
          com um pouco mais de experiência e fiquei animado com projetos
          realizados com dados. Trabalhei em demandas desafiadoras, como:
        </p>
        <ul className="list-disc list-inside">
          <li> Framework <a href="https://www.databricks.com/br/glossary/pyspark" target="_blank">PySpark</a>
            : desenvolvi evoluções para o software, documentei e dei apoio a
            clientes que fazem uso da ferramenta.
          </li>
          <li>
            Observatório de dados: Projeto de <a href="https://canaltech.com.br/seguranca/o-que-e-web-scraping/" target="_blank">web scraping</a> de diversas fontes de dados com automação a fim de fornecer dados que serão alimentados por dashboards no observatório de igualdade de gênero.
          </li>
        </ul>
        <hr className="my-4 border-neutral-100 dark:border-neutral-800" />
        <div className="h-20 flex justify-between items-baseline">
          <h2 className=" pb-0 font-medium text-xl tracking-tighter">INPE</h2>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            março de 2023 - outubro de 2023
          </span>
        </div>
        <p className=" text-neutral-600 dark:text-neutral-400 text-sm mt-0">
          Desenvolvedor e Analista de redes
        </p>
        <p>
          Meu primeiro trabalho como desenvolvedor foi no <a href="https://www.gov.br/inpe/pt-br" target="_blank">INPE</a>{' '} de
          Natal/RN. Consegui colocar em prática todo o conhecimento que eu tinha sobre desenvolvimento, segurança e
          redes de computadores, trabalhando nas seguintes vertentes:
        </p>
        <ul className="list-disc list-inside">
          <li> Controle de acesso físico: aplicação web em <a href="https://angular.dev/" target="_blank" >Angular 16</a> de gerenciamento de acesso físico com arquitetura baseada em eventos (EDA) 
          com finalidade de gerenciar o controle das áreas internas do edifício do INPE.
          </li>
          <li>
            Gerenciamento de ativos de rede: Participei ativamente da manutenção física e lógica da rede do INPE. Configurei switch's
            aruba e TP-Link, gerenciei firewall com pfSense e por fim implementei o sistema de AP (Access Point).
          </li>
          <li className="prose prose-neutral dark:prose-invert">
            Analise de vulnerabilidades na rede: Fiz a análise de segurança da rede para retirar todas as brechas
            do qual atacantes poderiam se aproveitar.
            {/* <span className="not-prose">
            <Badge href="https://www.python.org/">
          <img
            alt="Python logomark"
            src="/python.svg"
            className="!mr-1"
            width="13"
            height="13"
          />
          Python
        </Badge>{' '} .
            </span> */}
          </li>
        </ul>
      </div>
      
    </section>
  );
}
