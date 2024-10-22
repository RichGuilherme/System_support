import { TableSimple } from "@/components/ui/molecules/tableSimples";
import { NetworkIcon } from "lucide-react";
import { columns } from "./table/column";

const NetworkTable = () => {
  return (
    <div className="flex w-[98%] flex-col gap-2 rounded-lg border border-border-100 p-4">
      <p className="flex flex-row items-center gap-2 text-highlight-primary">
        <NetworkIcon className="text-highlight-verdinho" size={20} /> Rede
      </p>

      <TableSimple columns={columns} data={[]} />
    </div>
  );
};

export default NetworkTable;
