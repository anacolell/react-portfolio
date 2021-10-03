import React from "react";
import ProjectList from "./ProjectList";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("'ProjectList'", () => {
  const projects = [
    {
      id: 1,
      img: "images/nasa.png",
      alt: "Project1",
      title: "Nasa APOD",
      description:
        "This project provides a front end for the Astronomy Picture Of the Day, one of NASA's open APIs. It returns a space related image for each day of the year, along with an explanation written by a professional astronomer.",
      githubLink: "https://github.com/anacolell/nasa-apod",
      liveLink: "https://nasa-apod-ana.netlify.app/",
      technologies: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "React Router",
        },
        {
          id: 3,
          name: "Axios",
        },
        {
          id: 4,
          name: "Nasa API",
        },
        {
          id: 5,
          name: "CSS",
        },
      ],
    },
  ];
  it("renders project images", () => {
    render(<ProjectList projects={projects} />);
    const image = screen.queryByAltText("Project1");
    expect(image).toBeInTheDocument;
  });
  it("renders project title", () => {
    render(<ProjectList projects={projects} />);
    const title = screen.getByText("Nasa APOD");
    expect(title).toBeInTheDocument;
  });
  it("renders project description", () => {
    render(<ProjectList projects={projects} />);
    const description = screen.getByText(
      "This project provides a front end for the Astronomy Picture Of the Day, one of NASA's open APIs. It returns a space related image for each day of the year, along with an explanation written by a professional astronomer."
    );
    expect(description).toBeInTheDocument;
  });
  it("renders project technologies", () => {
    render(<ProjectList projects={projects} />);
    const technologies = screen.queryAllByRole("listitem");
    expect(technologies.length).toBe(5);
  });
  it("renders links", () => {
    render(<ProjectList projects={projects} />);
    const links = screen.queryAllByRole("link");
    expect(links.length).toBe(3);
  });
});
