import { ReactNode } from "react";
import { AppHeader } from "./AppHeader";
import { Providers } from "./Providers";
import "../styles/globals.css";

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 dark:bg-slate-900">
        <Providers>
          <AppHeader />

          <main className="mx-auto max-w-7xl p-4">{props.children}</main>
        </Providers>
      </body>
    </html>
  );
}
