import "../styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { IntlProvider } from "react-intl";
import { Layout } from "@/components";
import { FilterProvider } from "@/providers";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <IntlProvider locale="en">
      <QueryClientProvider client={queryClient}>
        <FilterProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FilterProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
}
