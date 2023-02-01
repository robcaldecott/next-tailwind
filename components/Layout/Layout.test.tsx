import { IntlProvider } from "react-intl";
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Layout } from ".";

it("renders", () => {
  render(
    <IntlProvider locale="en">
      <ThemeProvider>
        <Layout>Content</Layout>
      </ThemeProvider>
    </IntlProvider>
  );
  // We should kave a header
  expect(screen.getByRole("banner")).toHaveTextContent(/vehicle manager/i);
  // We could have context
  expect(screen.getByText(/content/i)).toBeInTheDocument();
});
