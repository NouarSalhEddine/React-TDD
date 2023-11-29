import React from "react";
import ExampleTwo from "./ExampleTwo";
import { render, screen } from "@testing-library/react";

it("ExampleTwo rendring", () => {
  render(<ExampleTwo />);
  const text = screen.getByText("hello");
  expect(text).toBeInTheDocument();
})

it("ExampleTwo rendring with props", () => {
  render(<ExampleTwo name ={"salah"} />);
  const text = screen.getByText("hello salah");
  expect(text).toBeInTheDocument();
})