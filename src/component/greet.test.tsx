import {  fireEvent, render, screen } from "@testing-library/react";
import Greet from "./greet";

test('greet renders corectly',() => {
  render(<Greet />)
  const textElement = screen.getByText('Hello')
  expect(textElement).toBeInTheDocument()
})

test('greet render name correctly', () => {
  render(<Greet name={"salah"} />)
  const textElement = screen.getByText("Hello salah")
  expect(textElement).toBeInTheDocument()
})

test('addition two numbers', () => {
  render(<Greet />)
  const input1 = screen.getByPlaceholderText('input1')
  const input2 = screen.getByPlaceholderText('input2')
  const Button = screen.getByText('add')
  fireEvent.change(input1, { target: { value: '1' } })
  fireEvent.change(input2, { target: { value: '4' } })
  fireEvent.click(Button)
  const result = screen.getByText('result : 5')
  expect(result).toBeInTheDocument()
})