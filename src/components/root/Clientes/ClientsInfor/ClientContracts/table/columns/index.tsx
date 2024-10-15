import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const ClientContractsSchema = z.object({
  name: z.string(),
  typeContract: z.string().email(),
  status: z.string(),
  startDate: z.string(),
  expiration: z.string(),
  readjustment: z.string(),
  lastAddendum: z.string(),
});

export type ClientContracts = z.infer<typeof ClientContractsSchema>;

export const columns: ColumnDef<ClientContracts>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "typeContract",
    header: "Tipo de contrato",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "startDate",
    header: "Data de ínicio",
  },
  {
    accessorKey: "expiration",
    header: "Expiração",
  },
  {
    accessorKey: "readjustment",
    header: "Reajuste",
  },
  {
    accessorKey: "lastAddendum",
    header: "Valor do último adendo",
  },
];
