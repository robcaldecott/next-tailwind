import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import Head from "next/head";
import { AppBar } from "../AppBar";
import { Text } from "../Text";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>Vehicle Manager</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AppBar>
      <Text component="h1" variant="h3" color="inherit">
        <FormattedMessage id="appTitle" defaultMessage="Vehicle Manager" />
      </Text>
    </AppBar>

    <main className="max-w-7xl p-4 mx-auto">{children}</main>
  </>
);
