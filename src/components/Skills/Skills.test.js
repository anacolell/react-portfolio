import React from "react";
import Skills from "./Skills";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("'Skills'", () => {
  it("renders skills icons", () => {
    render(<Skills />);
    const skill = screen.queryAllByRole("listitem");
    expect(skill.length).toBe(8);
  });
});
