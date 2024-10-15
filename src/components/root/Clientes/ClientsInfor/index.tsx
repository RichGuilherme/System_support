"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/atoms/tabs";
import ClientInformations from "./ClientInformations";
import ClientTickets from "./ClientTickets";

import ContainerInformation from "./ContainerInformations";
import ClientUser from "./ClientUser";

const ClientsInfor = ({ paramsValue }: { paramsValue: string }) => {
  const razaoSocial = {
    name: "Richard Guilherme Afonso Silva",
    idUser: "086442413997",
  };

  const urlLogo = "https://github.com/shadcn.png";

  return (
    <Tabs defaultValue="informations" className="page-container">
      <ContainerInformation
        urlLogo={urlLogo}
        paramsValue={paramsValue}
        name={razaoSocial.name}
        idUser={razaoSocial.idUser}
      />
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

      <TabsContent value="users">
        <ClientUser />
      </TabsContent>

      <TabsContent value="tickets">
        <ClientTickets />
      </TabsContent>
    </Tabs>
  );
};

export default ClientsInfor;
