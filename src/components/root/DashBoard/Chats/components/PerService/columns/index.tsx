"use client";

import { ColumnDef } from "@tanstack/react-table";

import { z } from "zod";
import { DotIcon } from "lucide-react";

export const attendantSchema = z.object({
  name: z.string(),
  status: z.enum(["online", "offline"]),
  chatsInProgress: z.number(),
  group: z.string(),
});

export const summaryDataSchema = z.object({
  onlineCount: z.number(),
  offlineCount: z.number(),
  totalChats: z.number(),
});

export const perServiceDataSchema = z.object({
  summaryData: summaryDataSchema,
  attendantData: z.array(attendantSchema),
});

export type Attendant = z.infer<typeof attendantSchema>;
export type summaryData = z.infer<typeof summaryDataSchema>;
export type PerServiceData = z.infer<typeof perServiceDataSchema>;

export const columns: ColumnDef<Attendant>[] = [
  {
    accessorKey: "name",
    header: "Atendente",
    cell: ({ row }) => (
      <div className="w-[200px] capitalize">{row.getValue("name")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <div className="flex space-x-2">
          {status === "offline" ? (
            <DotIcon size={30} className="text-red" />
          ) : (
            <DotIcon size={30} className="text-green-default" />
          )}
          <span className="max-w-[500px] truncate font-medium capitalize">
            {row.getValue("status")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "chatsInProgress",
    header: "Em andamento",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="capitalize"> {row.getValue("chatsInProgress")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "group",
    header: "Grupo de atendimento",
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="capitalize"> {row.getValue("group")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
