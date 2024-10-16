import { DataTableRowActions } from "@/components/ui/molecules/dataTable/dataTableRowActions";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const GroupAttendantsSchema = z.object({
  name: z.string(),
  chatDepartments: z.string(),
  attendants: z.string(),
  diary: z.enum(["Ativo", "Inativo"]),
});

export type GroupAttendants = z.infer<typeof GroupAttendantsSchema>;

export const column: ColumnDef<GroupAttendants>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "chatDepartments",
    header: "Departamentos de chats",
  },
  {
    accessorKey: "attendants",
    header: "Atendentes",
    cell: ({ row }) => (
      <div className="w-[300px] max-w-[500px]">
        <span>{row.getValue("attendants")}</span>
      </div>
    ),
  },
  {
    accessorKey: "diary",
    header: "Agenda",
  },
  {
    id: "active",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
