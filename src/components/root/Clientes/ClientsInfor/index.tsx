import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/atoms/tabs";
import ClientInformations from "./components/ClientInformations";
import ClientTickets from "./components/ClientTickets";

const ClientsInfor = ({ paramsValue }: { paramsValue: string }) => {
  const name = "Richard Guilherme Afonso Silva";
  const idUser = "086442413997";

  return (
    <Tabs defaultValue="informations" className="page-container">
      <div className="mb-4">
        <p className="text-2xl font-medium text-highlight-primary">
          {paramsValue}
        </p>

        <div className="text-textSimples-300">{`${name} ${idUser}`}</div>
      </div>

      <TabsList>
        <TabsTrigger value="informations">Informações</TabsTrigger>
        <TabsTrigger value="users">Usuário</TabsTrigger>
        <TabsTrigger value="tickets">Tickets</TabsTrigger>
        <TabsTrigger value="contracts">Contratos</TabsTrigger>
        <TabsTrigger value="resources">Recursos</TabsTrigger>
        <TabsTrigger value="relationship">Relacionamentos</TabsTrigger>
        <TabsTrigger value="billing">Faturamento</TabsTrigger>
      </TabsList>

      <TabsContent value="informations">
        <ClientInformations />
      </TabsContent>

      <TabsContent value="tickets">
        <ClientTickets />
      </TabsContent>
    </Tabs>
  );
};

export default ClientsInfor;
