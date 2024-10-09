import { DataTable } from "@/components/ui/molecules/dataTable";
import { contractsData } from "./data";
import { columns } from "./columns";

const ContractsTable = () => {
  return (
    <>
      <DataTable columns={columns} data={contractsData} inputValue={"name"} />
    </>
  );
};

export default ContractsTable;
