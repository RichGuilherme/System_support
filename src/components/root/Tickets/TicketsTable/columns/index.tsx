"use client";

import { ColumnDef } from "@tanstack/react-table";

import { z } from "zod";

export const TicketSchedule = z.object({
  id: z.number(),
  cliente: z.string(),
  titulo: z.string(),
  nome_do_solicitante: z.string(),
  responsavel: z.string(),
  prioridade: z.string(),
  estagio: z.string(),
  mesa_de_servico: z.string(),
  criado_em: z.string(),
  vencimento_de_atendimento: z.string(),
  vencimento_de_solucao: z.string(),
  status: z.string(),
});

export type tickets = z.infer<typeof TicketSchedule>;

export const columns: ColumnDef<tickets>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <div className="w-[100px] text-highlight-azul">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "cliente",
    header: "Cliente",
    cell: ({ row }) => (
      <div className="w-[200px] capitalize">{row.getValue("cliente")}</div>
    ),
  },
  {
    accessorKey: "titulo",
    header: "Título",
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("titulo")}
      </div>
    ),
  },
  {
    accessorKey: "nome_do_solicitante",
    header: "Nome do Solicitante",
    cell: ({ row }) => <div>{row.getValue("nome_do_solicitante")}</div>,
  },
  {
    accessorKey: "responsavel",
    header: "Responsável",
    cell: ({ row }) => <div>{row.getValue("responsavel")}</div>,
  },
  {
    accessorKey: "prioridade",
    header: "Prioridade",
    cell: ({ row }) => <div>{row.getValue("prioridade")}</div>,
  },
  {
    accessorKey: "estagio",
    header: "Estágio",
    cell: ({ row }) => <div>{row.getValue("estagio")}</div>,
  },
  {
    accessorKey: "mesa_de_servico",
    header: "Mesa de Serviço",
    cell: ({ row }) => <div>{row.getValue("mesa_de_servico")}</div>,
  },
  {
    accessorKey: "criado_em",
    header: "Criado Em",
    cell: ({ row }) => <div>{row.getValue("criado_em")}</div>,
  },
  {
    accessorKey: "vencimento_de_atendimento",
    header: "Vencimento de Atendimento",
    cell: ({ row }) => <div>{row.getValue("vencimento_de_atendimento")}</div>,
  },
  {
    accessorKey: "vencimento_de_solucao",
    header: "Vencimento de Solução",
    cell: ({ row }) => <div>{row.getValue("vencimento_de_solucao")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
];
