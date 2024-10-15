import { DataTable } from "@/components/ui/molecules/dataTable";
import { contractsData } from "./table/data";
import { columns } from "./table/columns";

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
