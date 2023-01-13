import { IntlProvider } from "react-intl";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { PageError } from ".";

describe("PageError", () => {
  it("renders", async () => {
    const handleRefetch = vi.fn();
    render(
      <IntlProvider locale="en">
        <PageError
          error={new Error("An error occurred")}
          refetch={handleRefetch}
        />
      </IntlProvider>
    );
    expect(
      screen.getByRole("heading", { name: /something went wrong!/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/an error occurred/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /try again/i }));
    expect(handleRefetch).toHaveBeenCalled();
  });
});
