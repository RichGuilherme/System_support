import { DataTableRowActions } from "@/components/ui/molecules/dataTable/dataTableRowActions";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const FinancialSchema = z.object({
  name: z.string(),
  batchBilling: z.enum(["Ativo", "Inativo"]),
  autoBilling: z.enum(["Ativo", "Inativo"]),
  billingDaysBeforeDue: z.string(),
  dueData: z.string(),
});

export type Financial = z.infer<typeof FinancialSchema>;

export const columns: ColumnDef<Financial>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "batchBilling",
    header: "Faturamento em lote",
  },
  {
    accessorKey: "autoBilling",
    header: "Faturamento automático",
  },
  {
    accessorKey: "billingDaysBeforeDue",
    header: "Faturar quantos dia antes do vencimento",
  },
  {
    accessorKey: "dueData",
    header: "Data de vencimento",
  },
  {
    id: "active",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
