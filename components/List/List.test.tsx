import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { List, ListItem, ListItemLink, ListItemText } from ".";

it("renders as a list", () => {
  render(
    <List>
      <ListItem>
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItem>
    </List>
  );
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getByRole("listitem")).toHaveTextContent(/primary/i);
  expect(screen.getByRole("listitem")).toHaveTextContent(/secondary/i);
});

it("renders as a link", () => {
  render(
    <List>
      <ListItemLink href="/">
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItemLink>
    </List>
  );
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveTextContent(/primary/i);
  expect(screen.getByRole("link")).toHaveTextContent(/secondary/i);
});
