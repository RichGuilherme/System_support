"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/atoms/accordion";
import Container from "@/components/ui/organisms/container";
import {
  CircleDollarSignIcon,
  HeadsetIcon,
  MonitorCogIcon,
  Trash2Icon,
  UserCog2Icon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Relatorios = () => {
  const router = useRouter();

  const accordionReport = [
    {
      item: "item-1",
      trigger: (
        <div className="flex flex-row items-center gap-2">
          <HeadsetIcon size={25} className="text-highlight-verdinho" />
          Atendente
        </div>
      ),
      values: [
        {
          label: "Atraso de apontamentos",
          url: "/atraso de apontamentos",
        },
        {
          label: "Carga de trabalho",
          url: "/",
        },
        {
          label: "Chat detalhado",
          url: "/",
        },
        {
          label: "Desclocamentos",
          url: "/",
        },
        {
          label: "Executivo de atendentes",
          url: "/",
        },
        {
          label: "Extrato de apontamentos",
          url: "/",
        },
        {
          label: "Gráfico de apontamentos",
          url: "/",
        },
        {
          label: "Pico de atendimento",
          url: "/",
        },
      ],
    },

    {
      item: "item-2",
      trigger: (
        <div className="flex flex-row items-center gap-2">
          <CircleDollarSignIcon size={25} className="text-highlight-verdinho" />
          Faturamento
        </div>
      ),
      values: [
        {
          label: "Atraso de apontamentos",
          url: "/atraso de apontamentos",
        },
        {
          label: "Carga de trabalho",
          url: "/",
        },
        {
          label: "Chat detalhado",
          url: "/",
        },
        {
          label: "Desclocamentos",
          url: "/",
        },
        {
          label: "Executivo de atendentes",
          url: "/",
        },
        {
          label: "Extrato de apontamentos",
          url: "/",
        },
        {
          label: "Gráfico de apontamentos",
          url: "/",
        },
        {
          label: "Pico de atendimento",
          url: "/",
        },
      ],
    },

    {
      item: "item-3",
      trigger: (
        <div className="flex flex-row items-center gap-2">
          <UserCog2Icon size={25} className="text-highlight-verdinho" />
          Administrativo
        </div>
      ),
      values: [
        {
          label: "Atraso de apontamentos",
          url: "/atraso de apontamentos",
        },
        {
          label: "Carga de trabalho",
          url: "/",
        },
        {
          label: "Chat detalhado",
          url: "/",
        },
        {
          label: "Desclocamentos",
          url: "/",
        },
        {
          label: "Executivo de atendentes",
          url: "/",
        },
        {
          label: "Extrato de apontamentos",
          url: "/",
        },
        {
          label: "Gráfico de apontamentos",
          url: "/",
        },
        {
          label: "Pico de atendimento",
          url: "/",
        },
      ],
    },

    {
      item: "item-4",
      trigger: (
        <div className="flex flex-row items-center gap-2">
          <MonitorCogIcon size={25} className="text-highlight-verdinho" />
          Recursos
        </div>
      ),
      values: [
        {
          label: "Atraso de apontamentos",
          url: "/atraso de apontamentos",
        },
        {
          label: "Carga de trabalho",
          url: "/",
        },
        {
          label: "Chat detalhado",
          url: "/",
        },
        {
          label: "Desclocamentos",
          url: "/",
        },
        {
          label: "Executivo de atendentes",
          url: "/",
        },
        {
          label: "Extrato de apontamentos",
          url: "/",
        },
        {
          label: "Gráfico de apontamentos",
          url: "/",
        },
        {
          label: "Pico de atendimento",
          url: "/",
        },
      ],
    },
    {
      item: "item-5",
      trigger: (
        <div className="flex flex-row items-center gap-2">
          <Trash2Icon size={25} className="text-highlight-verdinho" />
          Excluídos e bloqueados
        </div>
      ),
      values: [
        {
          label: "Atraso de apontamentos",
          url: "/atraso de apontamentos",
        },
        {
          label: "Carga de trabalho",
          url: "/",
        },
        {
          label: "Chat detalhado",
          url: "/",
        },
        {
          label: "Desclocamentos",
          url: "/",
        },
        {
          label: "Executivo de atendentes",
          url: "/",
        },
        {
          label: "Extrato de apontamentos",
          url: "/",
        },
        {
          label: "Gráfico de apontamentos",
          url: "/",
        },
        {
          label: "Pico de atendimento",
          url: "/",
        },
      ],
    },
  ];

  return (
    <Container title="Relatórios" width="100%">
      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-row flex-wrap justify-between"
      >
        {accordionReport.map((item) => (
          <AccordionItem
            value={item.item}
            key={item.item}
            className="w-[49%] data-[state=closed]:max-h-14"
          >
            <AccordionTrigger>{item.trigger}</AccordionTrigger>

            {item.values.map((value, index) => (
              <AccordionContent
                key={`${value.label} ${index}`}
                onClick={() => router.push(value.url)}
              >
                {value.label}
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default Relatorios;
