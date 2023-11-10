import React from "react";
import ExerciceOne from "./ExerciceOne";
import { render, screen } from "@testing-library/react";

test("ExerciceOne", () => {
  render(<ExerciceOne />);
  const text = screen.getByText("salah");
  expect(text).toBeInTheDocument();
})