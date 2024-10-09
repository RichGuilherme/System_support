import { DataTableRowActions } from "@/components/ui/molecules/dataTable/dataTableRowActions";
import { formatReal } from "@/utils/formatReal";
import { ColumnDef } from "@tanstack/react-table";
import { DotIcon } from "lucide-react";
import { z } from "zod";

export const ContractsTableSchema = z.object({
  name: z.string(),
  client: z.string(),
  status: z.enum(["Ativo", "Inativo"]),
  contractType: z.string(),
  readjustment: z.string(),
  expiration: z.string(),
  lastAddendumValue: z.number(),
});

export type Contracts = z.infer<typeof ContractsTableSchema>;

export const columns: ColumnDef<Contracts>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => (
      <div className="max-w-[500px]">
        <span className="capitalize">{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "client",
    header: "Cliente",
    cell: ({ row }) => (
      <div className="max-w-[500px]">
        <span className="capitalize">{row.getValue("client")}</span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <div className="flex w-[110px] flex-row items-center">
          {status === "Ativo" ? (
            <DotIcon size={30} className="text-green-500" />
          ) : (
            <DotIcon size={30} className="text-red" />
          )}
          <span className="capitalize">{row.getValue("status")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "contractType",
    header: "Tipos de contrato",
    cell: ({ row }) => (
      <div className="max-w-[500px]">
        <span className="capitalize">{row.getValue("contractType")}</span>
      </div>
    ),
  },
  {
    accessorKey: "readjustment",
    header: "Reajuste",
    cell: ({ row }) => (
      <div>
        <span className="capitalize">{row.getValue("readjustment")}</span>
      </div>
    ),
  },
  {
    accessorKey: "expiration",
    header: "Expiração",
    cell: ({ row }) => (
      <div className="">
        <span className="capitalize">{row.getValue("expiration")}</span>
      </div>
    ),
  },
  {
    accessorKey: "lastAddendumValue",
    header: "Valor do último adendo",
    cell: ({ row }) => {
      const fomattedReal = formatReal(row.getValue("lastAddendumValue"));

      return (
        <div>
          <span className="capitalize">{fomattedReal}</span>
        </div>
      );
    },
  },
];
