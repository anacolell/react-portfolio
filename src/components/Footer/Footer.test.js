import React from "react";
import Footer from "./Footer";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("'Footer'", () => {
  it("renders text", () => {
    render(<Footer />);
    const title = screen.getByText(/Coded by Ana/i);
    expect(title).toBeInTheDocument();
  });
});
