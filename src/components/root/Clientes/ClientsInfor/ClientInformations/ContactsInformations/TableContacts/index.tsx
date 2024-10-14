import { TableSimple } from "@/components/ui/molecules/table";
import { columns } from "./columns";
import { contactsInforData } from "./data/contactsInforData";

const TableContats = () => {
  return <TableSimple columns={columns} data={contactsInforData} />;
};

export default TableContats;
