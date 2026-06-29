import type { Metadata } from "next";
import { Inter, Lora, Fira_Code } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alexander (Alex) Smith",
    template: "%s | Alexander (Alex) Smith",
  },
  description:
    "Portfolio of Alexander (Alex) Smith — mechanical engineering student at Carnegie Mellon University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${firaCode.variable} h-full antialiased`}
      style={
        {
          "--font-sans": "'Inter', 'Lora', sans-serif",
          "--font-serif": "'Lora', serif",
          "--font-mono": "'Fira Code', monospace",
        } as React.CSSProperties
      }
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="flex min-h-screen flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 md:ml-64">
            <div className="mx-auto max-w-4xl px-6 py-10 md:px-10 md:py-14">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
