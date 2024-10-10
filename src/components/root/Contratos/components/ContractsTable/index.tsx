import { DataTable } from "@/components/ui/molecules/dataTable";
import { contractsData } from "./data";
import { columns } from "./columns";

const ContractsTable = () => {
  return (
    <>
      <DataTable
        columns={columns}
        data={contractsData}
        inputValue="name"
        showTotalRow={true}
        totalFieldKey="lastAddendumValue"
      />
    </>
  );
};

export default ContractsTable;
