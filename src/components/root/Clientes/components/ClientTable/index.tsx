import { DataTable } from "@/components/ui/molecules/dataTable";
import { columns } from "./columns";
import { ClientsData } from "./data";
import Filter from "./filter";

const ClientTable = () => {
  const filtersBar = Filter();

  return (
    <>
      <DataTable
        columns={columns}
        data={ClientsData}
        inputValue={"name"}
        filtersBar={filtersBar}
      />
    </>
  );
};

export default ClientTable;
