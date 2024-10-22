import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const NetworkTableSchedule = z.object({
  name: z.string(),
  MAC: z.string(),
  IP: z.string(),
  gateway: z.string(),
});

export type NetworkTable = z.infer<typeof NetworkTableSchedule>;
export const columns: ColumnDef<NetworkTable>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "MAC",
    header: "MAC",
  },
  {
    accessorKey: "IP",
    header: "IP",
  },
  {
    accessorKey: "gateway",
    header: "Gateway",
  },
];
