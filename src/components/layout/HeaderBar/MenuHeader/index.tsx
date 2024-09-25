import { Input } from "@/components/ui/atoms/input";
import { Button } from "@/components/ui/atoms/button";
import { Search, MessageSquareText, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ModeToggle } from "./ModeToggle";

export const MenuHeader = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center space-x-3">
        <Input
          className="rounded-full border-0 border-b-2 border-border bg-backgroundSecondary py-5 shadow-none"
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

      <Button variant="ghost" size="iconMd">
        <Bell />
      </Button>

      <ModeToggle />
      <Avatar>
        <AvatarImage
          className="h-10 w-10 rounded-full"
          src="https://github.com/shadcn.png"
          alt="avatar"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
