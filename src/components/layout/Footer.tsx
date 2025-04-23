"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 max-w-7xl py-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground font-bold"
            >
              Privacy
            </Link>
            <Link
              href="/notice"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Notice
            </Link>
            <Link
              href="/FAQ"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              FAQ
            </Link>
            <Link
              href="/disclaimer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Disclaimer
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-6 text-sm text-muted-foreground text-center">
          <p>© 2025 Dilrong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
