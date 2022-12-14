import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders item within page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Marlie/i);
  expect(linkElement).toBeInTheDocument();
});
