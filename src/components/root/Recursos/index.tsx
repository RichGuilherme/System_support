"use client";

import Container from "@/components/ui/organisms/container";
import ResourcesTable from "./components/ResourcesTable";
import SubTitle from "./components/subTitle";
import RightContent from "./components/rightContent";

const Recursos = () => {
  return (
    <Container
      title="Recursos"
      subTitle={<SubTitle />}
      rightContent={<RightContent />}
      style="gap-y-7"
      width="100%"
    >
      <ResourcesTable />
    </Container>
  );
};

export default Recursos;
