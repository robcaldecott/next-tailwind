import { useState } from "react";
import { IntlProvider } from "react-intl";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import { FilterProvider, ThemeProvider } from "@/providers";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <IntlProvider locale="en">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <FilterProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </FilterProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
}
