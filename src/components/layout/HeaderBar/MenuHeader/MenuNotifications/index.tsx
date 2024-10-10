import { Button } from "@/components/ui/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/atoms/dropdown-menu";
import { BellIcon } from "lucide-react";

const MenuNotifications = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="iconMd">
          <BellIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent></DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuNotifications;
