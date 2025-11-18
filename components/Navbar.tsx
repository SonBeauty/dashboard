import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, Moon, Settings, SquareMenu, User } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

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
              <DropdownMenuItem className="flex items-center gap-2">
                <User className="h-[1.2rem] w-[1.2rem] mr-2" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <Settings className="h-[1.2rem] w-[1.2rem] mr-2" /> Setting
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2"
                variant="destructive"
              >
                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <DropdownMenu>
          {/* button not inside button use asChild help it, display child not default element*/}
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <SquareMenu />
              <span className="sr-only">Open Menu</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent sideOffset={9}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2">
              Menu Item 1
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              Menu Item 2
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              Menu Item 3
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
