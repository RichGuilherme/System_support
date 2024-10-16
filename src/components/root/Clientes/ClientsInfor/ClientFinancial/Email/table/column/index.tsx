import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const EmailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  asaas: z.string(),
  contaAzul: z.string(),
  report: z.string(),
});

export type EmailType = z.infer<typeof EmailSchema>;

export const columns: ColumnDef<EmailType>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "asaas",
    header: "Asaas",
  },
  {
    accessorKey: "contaAzul",
    header: "ContaAzul",
  },
  {
    accessorKey: "report",
    header: "Relatório",
  },
];
