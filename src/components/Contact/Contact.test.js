import React from "react";
import Contact from "./Contact";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("'Contact'", () => {
  it("renders title", () => {
    render(<Contact />);
    const title = screen.getByText("Contact");
    expect(title).toBeInTheDocument();
  });

  it("renders text", () => {
    render(<Contact />);
    const text = screen.getByText(
      "Want to work together or have any questions?"
    );
    expect(text).toBeInTheDocument();
  });

  it("renders button", () => {
    render(<Contact />);
    const btn = screen.queryByRole("link");
    expect(btn).toBeInTheDocument();
  });
});
