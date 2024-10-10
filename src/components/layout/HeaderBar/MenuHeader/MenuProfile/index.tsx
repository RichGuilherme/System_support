import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/atoms/dropdown-menu";

import { LogOutIcon, HelpCircleIcon, User2Icon } from "lucide-react";

const MenuProfile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            className="h-10 w-10 rounded-full"
            src="https://github.com/shadcn.png"
            alt="avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="px-4 py-2">
        <DropdownMenuLabel className="flex flex-row gap-3">
          <Avatar>
            <AvatarImage
              className="h-10 w-10 rounded-full"
              src="https://github.com/shadcn.png"
              alt="avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-base text-textSimples-300">Richard Guilherme</p>
            <span className="text-foreground">richardRg@gmail.com</span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <User2Icon size={17} /> Minha conta
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HelpCircleIcon size={17} /> Ajuda
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="space-x-2">
          <LogOutIcon size={17} /> Saida
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuProfile;
