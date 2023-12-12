import React from "react";
import { render, screen } from "@testing-library/react";
import ExampleThree from ".";



describe("ExampleThree", () => {
  it("renders", () => {

    render(<ExampleThree />);
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
    const nameLabelElement = screen.getByLabelText("job location");
    expect(nameLabelElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });

});
