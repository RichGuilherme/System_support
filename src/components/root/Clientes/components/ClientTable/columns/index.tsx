import { DataTableRowActions } from "@/components/ui/molecules/dataTable/dataTableRowActions";
import { ColumnDef } from "@tanstack/react-table";
import { DotIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { z } from "zod";

export const ClientTableSchema = z.object({
  name: z.string(),
  status: z.enum(["Ativo", "Inativo"]),
});

export type Clients = z.infer<typeof ClientTableSchema>;

const Columns = () => {
  const router = useRouter();

  const columns: ColumnDef<Clients>[] = [
    {
      accessorKey: "name",
      header: "Nome",
      cell: ({ row }) => (
        <div
          className="max-w-[500px] cursor-pointer"
          onClick={() => router.push(`clientes/${row.getValue("name")}`)}
        >
          <span className="capitalize">{row.getValue("name")}</span>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status");

        return (
          <div className="flex max-w-[500px] flex-row items-center">
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
      id: "actions",
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ];

  return columns;
};

export default Columns;
