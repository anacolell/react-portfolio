import React from "react";
import Hero from "./Hero";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("'Hero'", () => {
  it("renders title", () => {
    render(<Hero />);
    const title = screen.getByText("Hi, my name is");
    expect(title).toBeInTheDocument();
  });

  it("renders name", () => {
    render(<Hero />);
    const text = screen.getByText("Ana Colell.");
    expect(text).toBeInTheDocument();
  });
  it("renders subtitle", () => {
    render(<Hero />);
    const text = screen.getByText("I make web applications.");
    expect(text).toBeInTheDocument();
  });
  it("renders text", () => {
    render(<Hero />);
    const text = screen.getByText(
      /I'm a full-stack web developer with a languages background/i
    );
    expect(text).toBeInTheDocument();
  });

  it("renders button", () => {
    render(<Hero />);
    const btn = screen.queryByRole("button", { name: "See my work" });
    expect(btn).toBeInTheDocument();
  });
});
