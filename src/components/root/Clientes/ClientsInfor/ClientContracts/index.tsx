import { Button } from "@/components/ui/atoms/button";
import { TableSimple } from "@/components/ui/molecules/tableSimples";
import Container from "@/components/ui/organisms/container";
import { PlusIcon } from "lucide-react";
import { columns } from "./table/columns";

const ClientContracts = () => {
  return (
    <div className="page-container">
      <Container
        title="Contratos"
        width="100%"
        rightContent={
          <>
            <Button variant="secondary" className="button-action">
              <PlusIcon size={18} />
              Contrato
            </Button>
          </>
        }
      >
        <TableSimple columns={columns} data={[]} />
      </Container>
    </div>
  );
};

export default ClientContracts;
