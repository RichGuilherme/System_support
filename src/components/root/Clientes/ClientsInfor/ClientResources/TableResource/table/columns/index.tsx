import { DataTableRowActions } from "@/components/ui/molecules/dataTable/dataTableRowActions";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const ClientResourceSchema = z.object({
  name: z.string(),
  users: z.string(),
  accessRemote: z.string(),
  group: z.string(),
  monitoring: z.string(),
  lastAccess: z.string(),
});

type ClientResource = z.infer<typeof ClientResourceSchema>;

export const columns: ColumnDef<ClientResource>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "users",
    header: "Usuários",
  },
  {
    accessorKey: "accessRemote",
    header: "Acesso remoto",
  },
  {
    accessorKey: "group",
    header: "Grupo",
  },
  {
    accessorKey: "monitoring",
    header: "Monitoramento",
  },
  {
    accessorKey: "lastAccess",
    header: "Último acesso",
  },

  {
    id: "active",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
