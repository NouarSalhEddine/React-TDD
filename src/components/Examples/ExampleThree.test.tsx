import React from "react";
import ExampleThree from "./ExampleThree.tsx";
import { render, screen } from "@testing-library/react";


describe("ExampleThree", () => {
  it("rendred correctly", () => {
    render(<ExampleThree />);

    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();

    const jobLocactionElement = screen.getByRole("combobox");
    expect(jobLocactionElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  })
  
});