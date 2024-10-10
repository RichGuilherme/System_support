import { DataTableRowActions } from "@/components/ui/molecules/dataTable/dataTableRowActions";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { LayoutDashboard } from "lucide-react";
import { z } from "zod";

export const ResourcesDataSchema = z.object({
  remoteAccess: z.boolean(),
  client: z.string(),
  clientResourceGroup: z.string(),
  name: z.string(),
  equipmentName: z.string(),
  user: z.string(),
  ip: z.string(),
  lastAccess: z.string(),
});

export type Resources = z.infer<typeof ResourcesDataSchema>;

export const columns: ColumnDef<Resources>[] = [
  {
    accessorKey: "remoteAccess",
    header: "Acesso remoto",
    cell: ({ row }) => (
      <div className="w-[50px]">
        <LayoutDashboard
          size={19}
          strokeWidth={3}
          className={cn(
            row.getValue("remoteAccess") === true
              ? "text-green-500"
              : "text-red",
          )}
        />
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
    accessorKey: "clientResourceGroup",
    header: "Clientes/Grupo de recursos",
    cell: ({ row }) => (
      <div className="max-w-[500px]">
        <span className="capitalize">
          {row.getValue("clientResourceGroup")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => (
      <div>
        <span className="capitalize">{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "equipmentName",
    header: "Nome do equipamento",
    cell: ({ row }) => (
      <div className="">
        <span className="capitalize">{row.getValue("equipmentName")}</span>
      </div>
    ),
  },
  {
    accessorKey: "user",
    header: "Usuário",
    cell: ({ row }) => (
      <div className="">
        <span className="capitalize">{row.getValue("user")}</span>
      </div>
    ),
  },
  {
    accessorKey: "ip",
    header: "IP",
    cell: ({ row }) => (
      <div className="">
        <span className="capitalize">{row.getValue("ip")}</span>
      </div>
    ),
  },
  {
    accessorKey: "lastAccess",
    header: "Último acesso",
    cell: ({ row }) => (
      <div className="">
        <span className="capitalize">{row.getValue("lastAccess")}</span>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
