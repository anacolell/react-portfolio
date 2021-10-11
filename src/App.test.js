import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
  it("renders Contact component", () => {
    render(<App />);
    const header = screen.queryByTestId("contact");
    expect(header).toBeInTheDocument();
  });

  it("renders Footer", () => {
    render(<App />);
    const footer = screen.queryByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("renders Hero section", () => {
    render(<App />);
    const hero = screen.queryByTestId("hero");
    expect(hero).toBeInTheDocument();
  });

  it("renders Navbar", () => {
    render(<App />);
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("renders Skills section", () => {
    render(<App />);
    const skills = screen.queryByTestId("skills");
    expect(skills).toBeInTheDocument();
  });

  it("renders Work section", () => {
    render(<App />);
    const work = screen.queryByTestId("work");
    expect(work).toBeInTheDocument();
  });
});
