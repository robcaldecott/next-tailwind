import { IntlProvider } from "react-intl";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect,it } from "vitest";
import { ErrorMessage } from ".";

describe("ErrorMessage", () => {
  it("renders without an action", () => {
    render(
      <IntlProvider locale="en">
        <ErrorMessage
          error={{ status: 500, statusText: "An error occurred" } as Response}
        />
      </IntlProvider>
    );
    expect(
      screen.getByRole("heading", { name: /something went wrong!/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/500: an error occurred/i)).toBeInTheDocument();
  });

  it("renders with an action", async () => {
    render(
      <IntlProvider locale="en">
        <ErrorMessage
          error={{ status: 500, statusText: "An error occurred" } as Response}
          action={<button>Action</button>}
        />
      </IntlProvider>
    );
    await userEvent.click(screen.getByRole("button", { name: /action/i }));
  });
});
