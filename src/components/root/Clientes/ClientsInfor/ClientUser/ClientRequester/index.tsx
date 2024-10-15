import { Button } from "@/components/ui/atoms/button";
import { TableSimple } from "@/components/ui/molecules/tableSimples";
import Container from "@/components/ui/organisms/container";
import { PlusIcon } from "lucide-react";
import { columns } from "./table/column";

const ClientRequester = () => {
  return (
    <Container
      title="Solicitante"
      width="100%"
      rightContent={
        <>
          <Button variant="secondary" className="button-action">
            <PlusIcon size={18} />
            Solicitante
          </Button>
        </>
      }
    >
      <TableSimple columns={columns} data={[]} />
    </Container>
  );
};

export default ClientRequester;
