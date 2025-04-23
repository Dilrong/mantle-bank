"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { LineChart, Star, Clock, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Sidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <aside className="h-screen w-16 border-l bg-background/50">
      <nav className="flex h-full flex-col items-center justify-between p-4">
        <div className="flex flex-col items-center space-y-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/investments"
                  className="flex h-10 w-12 items-center justify-center rounded-lg hover:bg-accent"
                >
                  <LineChart className="h-5 w-5 text-muted-foreground" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>My Investments</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/favorites"
                  className="flex h-10 w-12 items-center justify-center rounded-lg hover:bg-accent"
                >
                  <Star className="h-5 w-5 text-muted-foreground" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Favorites</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/recent"
                  className="flex h-10 w-12 items-center justify-center rounded-lg hover:bg-accent"
                >
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Recent</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex h-12 w-12 items-center justify-center rounded-lg hover:bg-accent"
              >
                {theme === "light" ? (
                  <Moon className="h-12 w-12 text-muted-foreground" />
                ) : (
                  <Sun className="h-12 w-12 text-muted-foreground" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
