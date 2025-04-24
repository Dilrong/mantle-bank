"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 max-w-7xl flex h-14 items-center">
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-base font-bold">
            <h1>B</h1>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium hover:text-foreground/80"
          >
            Home
          </Link>
          <Link
            href="/account"
            className="text-sm font-medium hover:text-foreground/80"
          >
            My
          </Link>
          <Link
            href="/earn"
            className="text-sm font-medium hover:text-foreground/80"
          >
            Earn
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="w-full rounded-md border border-input bg-background pl-8 md:w-[200px] lg:w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
