import { render, screen, fireEvent } from '@testing-library/react'
import ThemeMode from './ThemeMode'
import { ChakraProvider } from '@chakra-ui/react'
import userEvent from '@testing-library/user-event'

test('renders ThemeMode component', () => {
  render(<ThemeMode /> , { wrapper: ChakraProvider })
  const switchButton = screen.getByRole('button', { name: /switch color/i })
  const headingElement = screen.getByRole('heading')
  expect(switchButton).toBeInTheDocument()
  expect(headingElement).toHaveTextContent('light mode')
})
test('switches color mode', async () => {
  render(<ThemeMode /> , { wrapper: ChakraProvider })
  const switchButton = screen.getByRole('button', { name: /switch color/i })
  const headingElement = screen.getByRole('heading')
  await userEvent.click(switchButton)
  expect(headingElement).toHaveTextContent('dark mode')
} )

