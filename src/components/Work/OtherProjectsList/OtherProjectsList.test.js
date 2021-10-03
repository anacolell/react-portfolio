import React from "react";
import OtherProjectsList from "./OtherProjectsList";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("'OtherProjectsList'", () => {
  const otherProjects = [
    {
      id: 1,
      img: "",
      alt: "Project1",
      title: "Portfolio",
      description:
        "First version of my portfolio built with React and styled components.",
      githubLink: "https://github.com/anacolell/react-portfolio",
      liveLink: "https://www.anacolell.dev",
      technologies: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Styled components",
        },
        {
          id: 3,
          name: "CSS",
        },
      ],
    },
  ];
  it("renders project title", () => {
    render(<OtherProjectsList otherProjects={otherProjects} />);
    const title = screen.getByText("Portfolio");
    expect(title).toBeInTheDocument;
  });
  it("renders project description", () => {
    render(<OtherProjectsList otherProjects={otherProjects} />);
    const description = screen.getByText(
      "First version of my portfolio built with React and styled components."
    );
    expect(description).toBeInTheDocument;
  });
  it("renders project technologies", () => {
    render(<OtherProjectsList otherProjects={otherProjects} />);
    const technologies = screen.queryAllByRole("listitem");
    expect(technologies.length).toBe(3);
  });
  it("renders links", () => {
    render(<OtherProjectsList otherProjects={otherProjects} />);
    const links = screen.queryAllByRole("link");
    expect(links.length).toBe(2);
  });
});
