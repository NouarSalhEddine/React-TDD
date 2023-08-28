import { screen, render } from "@testing-library/react"
import ExerciceOne from "./ExerciceOne"

describe('Exercice one', () => {
  it("Ecercice one renders correctly", () => {
    render(<ExerciceOne />)  
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()

  })
    it('exerciceOne render avec props name', () => {
    render(<ExerciceOne name='wingo' />)
      const textElement = screen.getByText('Hello wingo')
      expect(textElement).toBeInTheDocument()
    })
  it('test addition for two numbers', () => {
    render(<ExerciceOne />)
    const input1 = screen.getByPlaceholderText('input1')
    const input2 = screen.getByPlaceholderText('input2')
    const button = screen.getByText('add')  
  })
})