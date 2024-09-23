import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MessageSquareText, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ModeToggle } from "./ModeToggle";

export const MenuHeader = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <Input
          className="border-0 shadow-none border-b-2 border-gray-200 rounded-b-none"
          type="text"
          placeholder="Número do ticket" />

        <Button variant="outline" size="iconMd" className="button-icon">
          <Search />
        </Button>
      </div>

      <Button variant="outline" size="iconMd" className="button-icon">
        <MessageSquareText />
      </Button>

      <Button variant="outline" size="iconMd" className="button-icon">
        <Bell />
      </Button>

      <ModeToggle />
      <Avatar>
        <AvatarImage
          className="w-10 h-10 rounded-full"
          src="https://github.com/shadcn.png" alt="avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
