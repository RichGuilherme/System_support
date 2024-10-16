import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const RelationshipBoardSchema = z.object({
  name: z.string(),
  groupService: z.string(),
  goalSLA: z.string(),
  typeBoard: z.string(),
  status: z.enum(["Ativo", "Inativo"]),
});

export type RelationshipBoard = z.infer<typeof RelationshipBoardSchema>;

export const columns: ColumnDef<RelationshipBoard>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "groupService",
    header: "Groupo de atendimento",
  },
  {
    accessorKey: "goalSLA",
    header: "Grupo de SLA",
  },
  {
    accessorKey: "typeBoard",
    header: "Tipo de mesa",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
