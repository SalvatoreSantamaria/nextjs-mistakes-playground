import Link from "next/link";
import { Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Next.js Mistakes Playground",
  description:
    "Wrong-way / right-way demos of common Next.js App Router mistakes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable} h-full`}>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] antialiased">
        <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-[family-name:var(--font-serif)] text-lg font-semibold tracking-tight">
              Next.js Mistakes Playground
            </Link>
            <Link
              href="/"
              className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              All mistakes
            </Link>
          </div>
        </header>
        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">{children}</main>
        <footer className="border-t border-zinc-200 py-6 text-center font-mono text-xs text-zinc-500 dark:border-zinc-800">
          Scaffold for Vercel · Live demos need the App Router server runtime
        </footer>
      </body>
    </html>
  );
}
