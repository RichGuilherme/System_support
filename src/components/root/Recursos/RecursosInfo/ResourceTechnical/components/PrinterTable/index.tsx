import { TableSimple } from "@/components/ui/molecules/tableSimples";
import { PrinterIcon } from "lucide-react";
import { columns } from "./table/columns";

const PrinterTable = () => {
  return (
    <div className="flex w-[98%] flex-col gap-2 rounded-lg border border-border-100 p-4">
      <p className="flex flex-row items-center gap-2 text-highlight-primary">
        <PrinterIcon className="text-highlight-verdinho" size={20} /> Impressora
      </p>

      <TableSimple columns={columns} data={[]} />
    </div>
  );
};

export default PrinterTable;
