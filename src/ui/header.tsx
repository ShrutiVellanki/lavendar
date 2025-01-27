import * as React from "react";
import { useTheme } from "../theme-provider";
import { UserGreeting } from "./user-greeting";
import { NotificationBell } from "./notification-bell";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./navigation-menu"; // Adjust the import path as needed

interface HeaderProps {
  userName: string;
}

export const Header: React.FC<HeaderProps> = ({ userName }) => {
  const theme = "lavendarDawn";

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <UserGreeting userName={userName} theme={theme} />
      </div>
      <div className="flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 bg-white shadow-lg rounded-lg">
                  <li>
                    <NavigationMenuLink href="#home">Home</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#about">About</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator />
        </NavigationMenu>
        <NotificationBell theme={theme} />
      </div>
    </header>
  );
};