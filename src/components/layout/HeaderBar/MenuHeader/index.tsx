import { Input } from "@/components/ui/atoms/input";
import { Button } from "@/components/ui/atoms/button";
import { ModeToggle } from "./ModeToggle";
import { Search, MessageSquareText } from "lucide-react";
import MenuProfile from "./MenuProfile";
import MenuNotifications from "./MenuNotifications";

export const MenuHeader = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center space-x-3">
        <Input
          className="rounded-full border-0 border-b-2 border-border-100 bg-backgroundSecondary py-5 shadow-none"
          type="text"
          placeholder="Número do ticket"
        />

        <Button variant="ghost" size="iconMd">
          <Search />
        </Button>
      </div>

      <Button variant="ghost" size="iconMd">
        <MessageSquareText />
      </Button>

      <MenuNotifications />

      <ModeToggle />
      <MenuProfile />
    </div>
  );
};
