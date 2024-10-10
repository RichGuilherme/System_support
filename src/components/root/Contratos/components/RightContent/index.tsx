import { Button } from "@/components/ui/atoms/button";
import { PlusIcon } from "lucide-react";

const RightContent = () => {
  return (
    <div className="flex gap-4">
      <Button variant="outline" className="px-6 py-2">
        Filtro
      </Button>

      <Button variant="secondary" className="flex items-center gap-2 px-4 py-2">
        <PlusIcon size={22} />
        Contratos
      </Button>
    </div>
  );
};

export default RightContent;
