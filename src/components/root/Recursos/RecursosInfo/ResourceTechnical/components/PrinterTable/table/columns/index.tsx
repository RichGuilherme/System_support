import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const NetworkTableSchedule = z.object({
  name: z.string(),
  port: z.string(),
});

export type NetworkTable = z.infer<typeof NetworkTableSchedule>;
export const columns: ColumnDef<NetworkTable>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "port",
    header: "Porta",
  },
];
