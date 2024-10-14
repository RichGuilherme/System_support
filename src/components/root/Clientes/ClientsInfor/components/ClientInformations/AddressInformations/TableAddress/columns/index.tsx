import { DataTableRowActions } from "@/components/ui/molecules/dataTable/dataTableRowActions";
import { ColumnDef } from "@tanstack/react-table";
import { PatternFormat } from "react-number-format";
import { z } from "zod";

export const AddressInforSchema = z.object({
  cep: z.number(),
  publicPlace: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  complement: z.string(),
});

export type AddressInfor = z.infer<typeof AddressInforSchema>;

export const columns: ColumnDef<AddressInfor>[] = [
  {
    accessorKey: "cep",
    header: "CEP",
    cell: ({ row }) => {
      const cep = row.getValue("cep");

      return (
        <PatternFormat
          className="bg-transparent"
          displayType="text"
          format="#####-###"
          value={cep as string}
        />
      );
    },
  },
  {
    accessorKey: "publicPlace",
    header: "Logradouro",
  },
  {
    accessorKey: "neighborhood",
    header: "Bairro",
  },
  {
    accessorKey: "city",
    header: "Cidade",
  },
  {
    accessorKey: "state",
    header: "Estado",
  },
  {
    accessorKey: "complement",
    header: "Complemento",
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
