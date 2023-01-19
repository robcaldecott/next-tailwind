import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import Head from "next/head";
import { useTheme } from "@/providers/ThemeProvider";
import { AppBar } from "../AppBar";
import { IconButton } from "../IconButton";
import { Text } from "../Text";

interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  const { mode, setMode } = useTheme();

  return (
    <>
      <Head>
        <title>Vehicle Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar>
        <Text component="h1" variant="h3" color="inherit" flexGrow={1}>
          <FormattedMessage id="appTitle" defaultMessage="Vehicle Manager" />
        </Text>

        {/* Theme switcher. */}
        <IconButton
          color="inherit"
          icon={mode === "light" ? MoonIcon : SunIcon}
          edge="end"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        />
      </AppBar>

      <main className="mx-auto max-w-7xl p-4">{props.children}</main>
    </>
  );
}
