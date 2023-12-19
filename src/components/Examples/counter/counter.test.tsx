import userEvent from '@testing-library/user-event';
import Counter from './counter';
import { render, screen } from '@testing-library/react';

describe('Counter', () => {
  test('renders Counter component', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole('button', { name: '+' });
    expect(incrementButton).toBeInTheDocument();
  });
  test('renders Counter component with count 0', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });
  test('renders Counter component with count 1 after increment button click',async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: '+' });
    await userEvent.click(incrementButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1');
  });
});