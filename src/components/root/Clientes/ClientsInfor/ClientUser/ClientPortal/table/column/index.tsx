import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const ClientPortalSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  extension: z.string(),
  status: z.string(),
});

export type ClientPortal = z.infer<typeof ClientPortalSchema>;

export const columns: ColumnDef<ClientPortal>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "phone",
    header: "Telefone",
  },
  {
    accessorKey: "extension",
    header: "Ramal",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
