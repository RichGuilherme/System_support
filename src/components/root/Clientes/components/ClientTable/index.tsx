import { DataTable } from "@/components/ui/molecules/dataTable";

import { ClientsData } from "./data";
import Filter from "./filters";
import Columns from "./columns";

const ClientTable = () => {
  const filtersBar = Filter();

  const columns = Columns();
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
