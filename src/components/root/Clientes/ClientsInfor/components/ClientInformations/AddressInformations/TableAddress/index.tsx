import { TableSimple } from "@/components/ui/molecules/tableSimples";
import { columns } from "./columns";
import { addressInforData } from "./data/addreessInforData";

const TableAddress = () => {
  return <TableSimple columns={columns} data={addressInforData} />;
};

export default TableAddress;
