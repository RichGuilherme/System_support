import { Button } from "@/components/ui/atoms/button";
import { PlusIcon } from "lucide-react";
import ButtonFilter from "./ButtonFilter";

const RightContent = () => {
  return (
    <div className="flex gap-4">
      <ButtonFilter />

      <Button variant="secondary" className="flex items-center gap-2 px-4 py-2">
        <PlusIcon size={22} />
        Contratos
      </Button>
    </div>
  );
};

export default RightContent;
