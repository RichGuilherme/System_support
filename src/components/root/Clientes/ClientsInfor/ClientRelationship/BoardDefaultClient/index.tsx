import { Switch } from "@/components/ui/atoms/switch";
import { TooltipsIcon } from "@/components/ui/molecules/tooltips/tooltipIcon";
import Container from "@/components/ui/organisms/container";

const BoardDefaultClient = () => {
  return (
    <Container
      title="Mesa padrão do cliente"
      width="100%"
      rightContent={
        <>
          <TooltipsIcon content="" />
        </>
      }
    >
      <Switch />
    </Container>
  );
};

export default BoardDefaultClient;
