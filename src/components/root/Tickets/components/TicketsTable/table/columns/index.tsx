"use client";

import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { CheckIcon, Clock2Icon, PauseIcon } from "lucide-react";

import { z } from "zod";

export const TicketSchedule = z.object({
  id: z.number(),
  cliente: z.string(),
  titulo: z.string(),
  nome_do_solicitante: z.string(),
  responsavel: z.string(),
  prioridade: z.enum(["Alta", "Média", "Baixa", "Nenhum"]),
  estagio: z.string(),
  mesa_de_servico: z.string(),
  criado_em: z.string(),
  vencimento_de_atendimento: z.string(),
  vencimento_de_solucao: z.string(),
  status: z.enum([
    "Aberto",
    "Fechado",
    "Em Progresso",
    "Atendimento Remoto",
    "Atendimento Interno",
  ]),
});

export type Tickets = z.infer<typeof TicketSchedule>;

type Priority = keyof typeof priorityClasses;

const priorityClasses = {
  Alta: "text-red",
  Média: "text-yellow",
  Baixa: "text-green-500",
  Nenhum: "text-gray-500",
};

export const columns: ColumnDef<Tickets>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <div className="w-[48px]">
        <span className="capitalize text-highlight-azul">
          {row.getValue("id")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "cliente",
    header: "Cliente",
    cell: ({ row }) => (
      <div className="w-[200px]">
        <span className="capitalize">{row.getValue("cliente")}</span>
      </div>
    ),
  },
  {
    accessorKey: "titulo",
    header: "Título",
    cell: ({ row }) => (
      <div className="max-w-[300px] truncate">
        <span className="font-medium capitalize">{row.getValue("titulo")}</span>
      </div>
    ),
  },
  {
    accessorKey: "nome_do_solicitante",
    header: "Nome do Solicitante",
    cell: ({ row }) => (
      <div className="max-w-[150px] truncate">
        <span className="capitalize">
          {row.getValue("nome_do_solicitante")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "responsavel",
    header: "Responsável",
    cell: ({ row }) => (
      <div className="max-w-[150px] truncate">
        <span className="capitalize"> {row.getValue("responsavel")}</span>
      </div>
    ),
  },
  {
    accessorKey: "prioridade",
    header: "Prioridade",
    cell: ({ row }) => {
      const prioridade = row.getValue("prioridade") as Priority;
      const prioridadeClasse = priorityClasses[prioridade];

      return (
        <div>
          <span className={cn("capitalize", prioridadeClasse)}>
            {row.getValue("prioridade")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "estagio",
    header: "Estágio",
    cell: ({ row }) => (
      <div className="max-w-[80px] truncate">
        <span className="capitalize">{row.getValue("estagio")}</span>
      </div>
    ),
  },
  {
    accessorKey: "mesa_de_servico",
    header: "Mesa de Serviço",
    cell: ({ row }) => (
      <div>
        <span className="capitalize">{row.getValue("mesa_de_servico")}</span>
      </div>
    ),
  },
  {
    accessorKey: "criado_em",
    header: "Criado Em",
    cell: ({ row }) => (
      <div>
        <span className="whitespace-nowrap capitalize">
          {row.getValue("criado_em")}
        </span>
      </div>
    ),
    filterFn: (row, id, value) => {
      const rowDate = new Date(row.getValue(id));
      const [startDate, endDate] = value;
      return rowDate >= startDate && rowDate <= endDate;
    },
  },
  {
    accessorKey: "vencimento_de_atendimento",
    header: "Vencimento de Atendimento",
    cell: ({ row }) => {
      const vencimentoDeAtendimentoValue = row.getValue(
        "vencimento_de_atendimento",
      );

      const getIconAndColor = (value: unknown) => {
        switch (value) {
          case "SLA cumprido":
            return { icon: <CheckIcon size={17} className="text-green-500" /> };
          case "SLA vencido":
            return { icon: <Clock2Icon size={17} className="text-red" /> };
          default:
            return {
              icon: <Clock2Icon size={17} className="text-green-500" />,
            };
        }
      };

      const { icon } = getIconAndColor(vencimentoDeAtendimentoValue);

      return (
        <div className="max-w-[300px]">
          <span className="flex flex-row items-center gap-1">
            {icon}
            {row.getValue("vencimento_de_atendimento")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "vencimento_de_solucao",
    header: "Vencimento de Solução",
    cell: ({ row }) => {
      const vencimentoDeSolucaoValue = row.getValue("vencimento_de_solucao");

      const getIconAndColor = (value: unknown) => {
        switch (value) {
          case "SLA cumprido":
            return { icon: <CheckIcon size={17} className="text-green-500" /> };
          case "SLA pausado":
            return { icon: <PauseIcon size={17} className="text-yellow" /> };
          case "SLA vencido":
            return { icon: <Clock2Icon size={17} className="text-red" /> };
          default:
            return {
              icon: <Clock2Icon size={17} className="text-green-500" />,
            };
        }
      };

      const { icon } = getIconAndColor(vencimentoDeSolucaoValue);

      return (
        <div className="max-w-[300px]">
          <span className="flex flex-row gap-1">
            {icon}
            {row.getValue("vencimento_de_solucao")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="max-w-[148px] truncate">
        <span className="whitespace-nowrap capitalize">
          {row.getValue("status")}
        </span>
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
