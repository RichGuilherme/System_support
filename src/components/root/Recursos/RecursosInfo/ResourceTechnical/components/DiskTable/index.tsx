import { TableSimple } from "@/components/ui/molecules/tableSimples";
import { DatabaseIcon } from "lucide-react";
import { columns } from "./table/columns";

const DiskTable = () => {
  return (
    <div className="flex w-[98%] flex-col gap-2 rounded-lg border border-border-100 p-4">
      <p className="flex flex-row items-center gap-2 text-highlight-primary">
        <DatabaseIcon className="text-highlight-verdinho" size={20} />
        Disco
      </p>
      <TableSimple columns={columns} data={[]} />
    </div>
  );
};

export default DiskTable;
