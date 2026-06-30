import "./../styles/globals.css";
import type { ReactNode } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold">
              Periodic Tutor
            </Link>
            <nav className="text-sm text-gray-600">
              <span className="mr-3">
                <Link href="/dashboard" className="hover:text-gray-900">Dashboard</Link>
              </span>
              <span className="mr-3">
                <Link href="/(auth)/login" className="hover:text-gray-900">Login</Link>
              </span>
              <span>
                <Link href="/(auth)/signup" className="hover:text-gray-900">Sign up</Link>
              </span>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
