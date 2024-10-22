import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const DiskTableSchedule = z.object({
  name: z.string(),
  system: z.string(),
  size: z.string(),
  use: z.string(),
});

export type DiskTable = z.infer<typeof DiskTableSchedule>;
export const columns: ColumnDef<DiskTable>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "system",
    header: "Sistema",
  },
  {
    accessorKey: "size",
    header: "Tamanho",
  },
  {
    accessorKey: "use",
    header: "Uso",
  },
];
