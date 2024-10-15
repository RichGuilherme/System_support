"use client";

import { ColumnDef } from "@tanstack/react-table";

import { z } from "zod";

export const groupDataSchema = z.object({
  groupName: z.string(),
  total: z.number(),
  inProgress: z.number(),
  inQueue: z.number(),
  waitingResponse: z.number(),
  averageWaitTime: z.string(),
  averageServiceTime: z.string(),
});

export type Expense = z.infer<typeof groupDataSchema>;

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "groupName",
    header: "Grupo de atendentes",
    cell: ({ row }) => (
      <div className="w-[200px] capitalize">{row.getValue("groupName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "total",
    header: "Todos",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium capitalize">
            {row.getValue("total")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "inProgress",
    header: "Em atendimento",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="capitalize"> {row.getValue("inProgress")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "inQueue",
    header: "Fila de espera",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="capitalize"> {row.getValue("inQueue")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "waitingResponse",
    header: "Aguardando resposta",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span> {row.getValue("waitingResponse")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "averageWaitTime",
    header: "Média de espera",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="capitalize">{row.getValue("averageWaitTime")}</span>
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
    accessorKey: "averageServiceTime",
    header: "Média de atendimento",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="capitalize">
            {row.getValue("averageServiceTime")}
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
