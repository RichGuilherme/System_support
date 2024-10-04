"use client";

import { ColumnDef } from "@tanstack/react-table";

import { z } from "zod";

export const expenseSchema = z.object({
  departamento: z.string(),
  todos: z.number(),
  emAtendimento: z.number(),
  filaDeEspera: z.number(),
  aguardandoResposta: z.number(),
  mediaDeEspera: z.string(),
  mediaDeAtendimento: z.string(),
});

export type Expense = z.infer<typeof expenseSchema>;

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "departamento",
    header: "Departamento",
    cell: ({ row }) => (
      <div className="w-[200px] capitalize">{row.getValue("departamento")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "todos",
    header: "Todos",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium capitalize">
            {row.getValue("todos")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "emAtendimento",
    header: "Em atendimento",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="capitalize"> {row.getValue("emAtendimento")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "filaDeEspera",
    header: "Fila de espera",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="capitalize"> {row.getValue("filaDeEspera")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "aguardandoResposta",
    header: "Aguardando resposta",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span> {row.getValue("aguardandoResposta")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "mediaDeEspera",
    header: "Média de espera",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="capitalize">{row.getValue("mediaDeEspera")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const rowDate = new Date(row.getValue(id));
      const [startDate, endDate] = value;
      return rowDate >= startDate && rowDate <= endDate;
    },
  },

  {
    accessorKey: "mediaDeAtendimento",
    header: "Média de atendimento",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="capitalize">
            {row.getValue("mediaDeAtendimento")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const rowDate = new Date(row.getValue(id));
      const [startDate, endDate] = value;
      return rowDate >= startDate && rowDate <= endDate;
    },
  },
];
