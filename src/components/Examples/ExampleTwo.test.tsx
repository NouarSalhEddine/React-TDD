import React from "react";
import ExampleTwo from "./ExampleTwo";
import { render, screen } from "@testing-library/react";

it("ExampleTwo", () => {
  render(<ExampleTwo />);
  const text = screen.getByText("salah");
  expect(text).toBeInTheDocument();
})