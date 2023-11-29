import React from "react";
import ExerciceOne from "./ExampleOne";
import { render, screen } from "@testing-library/react";

it("ExerciceOne", () => {
  render(<ExerciceOne />);
  const text = screen.getByText("salah");
  expect(text).toBeInTheDocument();
})