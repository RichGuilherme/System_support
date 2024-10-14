import { TableSimple } from "@/components/ui/molecules/table";
import { columns } from "./columns";
import { addressInforData } from "./data/addreessInforData";

const TableAddress = () => {
  return <TableSimple columns={columns} data={addressInforData} />;
};

export default TableAddress;
