import { fireEvent, render, screen } from "@testing-library/react"
import Greet from "./greet"

test('greet render correctly',()=> {
  render(<Greet/>)
  const elementHello = screen.getByText(/hello/i)
  expect(elementHello).toBeInTheDocument()
})
test('greet render with name', () => {
  render(<Greet name='wingo'/>)
  const textElement = screen.getByText('Hello wingo')
  expect(textElement).toBeInTheDocument()
})
test('addition two numbers', () => {
  render(<Greet />)
  const input1 = screen.getByPlaceholderText('input1')
  const input2 = screen.getByPlaceholderText('input2')
  const button = screen.getByText('add')
  fireEvent.change(input1, { target: { value: '1' } })
  fireEvent.change(input2, { target: { value: '2' } })
  fireEvent.click(button)
  const result = screen.getByText('3')
  expect(result).toBeInTheDocument()
})