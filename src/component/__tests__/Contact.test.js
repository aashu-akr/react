import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocumnet();
});

//when we are testing a component, then we have to render it on to the JSDom
