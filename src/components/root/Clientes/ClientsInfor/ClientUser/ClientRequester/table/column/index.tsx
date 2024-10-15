import { DataTableRowActions } from "@/components/ui/molecules/dataTable/dataTableRowActions";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const ClientRequesterSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  extension: z.string(),
  ticketsByEmail: z.string(),
});

export type ClientRequester = z.infer<typeof ClientRequesterSchema>;

export const columns: ColumnDef<ClientRequester>[] = [
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
    accessorKey: "ticketsByEmail",
    header: "Abrir tickets por e-mail",
  },
  {
    id: "active",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
