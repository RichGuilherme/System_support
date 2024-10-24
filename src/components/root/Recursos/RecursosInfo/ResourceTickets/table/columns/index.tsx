import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const ResourceTicketsSchema = z.object({
  tickets: z.string(),
  createdIn: z.string(),
  user: z.string(),
  internshipExpiration: z.string(),
  solutionExpiration: z.string(),
});

export type ResourceTickets = z.infer<typeof ResourceTicketsSchema>;

export const columns: ColumnDef<ResourceTickets>[] = [
  {
    accessorKey: "tickets",
    header: "Tickets",
  },
  {
    accessorKey: "createdIn",
    header: "Criado em",
  },
  {
    accessorKey: "user",
    header: "Usuário",
  },
  {
    accessorKey: "internshipExpiration",
    header: "Vencimento do estágio",
  },
  {
    accessorKey: "solutionExpiration",
    header: "Vencimento de solução",
  },
];
