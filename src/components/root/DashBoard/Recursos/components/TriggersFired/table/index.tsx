import { TableSimple } from "@/components/ui/molecules/tableSimples";

import { triggersFiredData } from "../data/triggersFiredData";
import { columns } from "../columns";

export default function TableTriggersFired() {
  return (
    <div className="container mx-auto">
      <TableSimple columns={columns} data={triggersFiredData} />
    </div>
  );
}
