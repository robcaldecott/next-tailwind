"use client";

import { ReactNode, useState } from "react";
import { IntlProvider } from "react-intl";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterProvider } from "@/providers/FilterProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <IntlProvider locale="en">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <FilterProvider>{props.children}</FilterProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
}
