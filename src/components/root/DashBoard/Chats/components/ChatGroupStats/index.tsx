"use client";

import { DataTable } from "@/components/ui/molecules/dataTable/";

import Container from "@/components/ui/organisms/container";

import { chatsStatsData } from "./table/data/dataChatGroupStats";
import { TooltipsIcon } from "@/components/ui/molecules/tooltipIcon";
import { columns } from "./table/columns";

const ChatGroupStats = () => {
  return (
    <Container
      title="Chats por grupo de atendentes"
      rightContent={
        <TooltipsIcon content="Tabela com informações sobre os grupos de atendentes" />
      }
    >
      <DataTable
        data={chatsStatsData}
        columns={columns}
        inputValue={"groupName"}
        showDatePicker={false}
      />
    </Container>
  );
};

export default ChatGroupStats;
