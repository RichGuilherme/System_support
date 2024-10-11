import { Button } from "@/components/ui/atoms/button";
import { ChevronDownIcon, PlusIcon, SettingsIcon } from "lucide-react";

const RightContent = () => {
  return (
    <div className="flex gap-4">
      <Button variant="outline" className="px-2 py-1">
        <SettingsIcon size={20} />
      </Button>

      <Button variant="outline" className="flex items-center gap-1 px-6 py-2">
        <ChevronDownIcon size={18} />
        ações
      </Button>

      <Button variant="secondary" className="flex items-center gap-2 px-4 py-2">
        <PlusIcon size={22} />
        Contratos
      </Button>
    </div>
  );
};

export default RightContent;
