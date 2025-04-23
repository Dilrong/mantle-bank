import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { Toaster } from "@/components/ui/sonner";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "WTS",
  description: "An adventure for freedom and opportunity Bank",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSans.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex">
            <div className="flex-1 flex flex-col">
              <Header />
              <Toaster />
              <main className="flex-1 container mx-auto px-4 max-w-7xl">
                {children}
              </main>
              <Footer />
            </div>
            <Sidebar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
