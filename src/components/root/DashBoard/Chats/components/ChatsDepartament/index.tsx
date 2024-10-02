import { DataTable } from "@/components/ui/molecules/table/dataTable";
import { columns } from "./columns";
import data from "./data/teste.json";
import Container from "@/components/ui/organisms/container";

const ChatsDepartament = async () => {
  return (
    <Container>
      <DataTable data={data} columns={columns} />
    </Container>
  );
};

export default ChatsDepartament;
