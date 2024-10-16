"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/atoms/tabs";
import ClientInformations from "./ClientInformations";
import ClientTickets from "./ClientTickets";

import ContainerInformation from "./components/ContainerInformations";
import ClientUser from "./ClientUser";
import ClientContracts from "./ClientContracts";
import ClientResource from "./ClientResources";
import ClientRelationship from "./ClientRelationship";
import ClientFinancial from "./ClientFinancial";

const ClientsInfor = ({ paramsValue }: { paramsValue: string }) => {
  const razaoSocial = {
    name: "Richard Guilherme Afonso Silva",
    idUser: "086442413997",
  };

  const urlLogo = "https://github.com/shadcn.png";

  const tabs = [
    {
      value: "informations",
      label: "Informações",
      component: <ClientInformations />,
    },
    {
      value: "users",
      label: "Usuário",
      component: <ClientUser />,
    },
    {
      value: "tickets",
      label: "Tickets",
      component: <ClientTickets />,
    },
    {
      value: "contracts",
      label: "Contratos",
      component: <ClientContracts />,
    },
    {
      value: "resources",
      label: "Recursos",
      component: <ClientResource />,
    },
    {
      value: "relationship",
      label: "Relacionamentos",
      component: <ClientRelationship />,
    },
    {
      value: "financial",
      label: "Faturamento",
      component: <ClientFinancial />,
    },
  ];

  return (
    <Tabs defaultValue="informations" className="page-container">
      <ContainerInformation
        urlLogo={urlLogo}
        paramsValue={paramsValue}
        name={razaoSocial.name}
        idUser={razaoSocial.idUser}
      />
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.component}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ClientsInfor;
