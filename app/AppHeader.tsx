"use client";

import { FormattedMessage } from "react-intl";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import { AppBar } from "@/components/AppBar";
import { IconButton } from "@/components/IconButton";
import { Text } from "@/components/Text";
import { useTheme } from "@/providers/ThemeProvider";

export function AppHeader() {
  const { mode, setMode } = useTheme();

  return (
    <>
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
    </>
  );
}
