"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, Moon, Settings, SquareMenu, Sun, User } from "lucide-react";
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
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <nav className="flex items-center justify-between">
      {/* LEFT */}
      collapseButton
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <DropdownMenu>
          {/* button not inside button use asChild help it, display child not default element*/}
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent sideOffset={9}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme("light")}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme("dark")}
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme("system")}
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
              Items 1
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              Items 2
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              Items 3
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
