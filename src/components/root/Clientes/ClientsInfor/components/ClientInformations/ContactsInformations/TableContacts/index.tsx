import { TableSimple } from "@/components/ui/molecules/tableSimples";
import { columns } from "./columns";
import { contactsInforData } from "./data/contactsInforData";

const TableContats = () => {
  return <TableSimple columns={columns} data={contactsInforData} />;
};

export default TableContats;
