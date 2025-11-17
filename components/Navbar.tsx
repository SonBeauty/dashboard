import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, Moon, Settings, User } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      {/* LEFT */}
      collapseButton
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <Moon />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                className="rounded-full h-8 w-8"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <DropdownMenuContent sideOffset={9}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-2"> <User className="h-[1.2rem] w-[1.2rem] mr-2"/> Profile</DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2"><Settings className="h-[1.2rem] w-[1.2rem] mr-2"/> Setting</DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2" variant="destructive"><LogOut className="h-[1.2rem] w-[1.2rem] mr-2"/> Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
