import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const ClientRequesterSchema = z.object({
  email: z.string(),
  status: z.string(),
});

export type ClientRequester = z.infer<typeof ClientRequesterSchema>;

export const columns: ColumnDef<ClientRequester>[] = [
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
