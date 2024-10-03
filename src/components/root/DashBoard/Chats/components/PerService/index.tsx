"use client";

import { DataTable } from "@/components/ui/molecules/dataTable/";
import { columns } from "./columns";

import Container from "@/components/ui/organisms/container";

import { AttendantData } from "./data/dataAttendant";
import { TooltipsIcon } from "@/components/ui/molecules/tooltipIcon";
import StatusInfoGroup from "./statusInfoGroup";
import { PerServiceValues } from "@/components/data/mockups/chatsMockados";

const PerService = () => {
  const data = PerServiceValues[0].summaryData;

  const statusFacetedFilter = [
    {
      label: "Online",
      value: "online",
    },
    {
      label: "Offline",
      value: "offline",
    },
  ];

  const filterBar = [
    {
      title: "Status",
      columnId: "status",
      options: statusFacetedFilter,
    },
  ];

  return (
    <Container
      title="Chats por atendimento"
      rightContent={
        <TooltipsIcon content="Tabela com informações sobre os chats por atendimento" />
      }
    >
      <StatusInfoGroup data={data} />

      <DataTable
        data={AttendantData}
        columns={columns}
        inputValue={"name"}
        showDatePicker={false}
        filtersBar={filterBar}
      />
    </Container>
  );
};

export default PerService;
