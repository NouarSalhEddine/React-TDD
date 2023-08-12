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
})