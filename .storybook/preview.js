import { IntlProvider } from "react-intl";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterContext } from "next/dist/shared/lib/router-context";
import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  darkMode: {
    stylePreview: true,
  },
};

export const decorators = [
  (Story) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
          retry: false,
        },
      },
      logger: {
        error: () => {},
        log: (...args) => console.log(...args),
        warn: (...args) => console.warn(...args),
      },
    });

    return (
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale="en">
          <Story />
        </IntlProvider>
      </QueryClientProvider>
    );
  },
];
