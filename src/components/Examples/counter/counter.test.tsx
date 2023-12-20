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
  test('renders Counter component with count 2 after increment button click twice',async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: '+' });
    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('2');
  });
  test('renders Counter component with count 0 after set button click',async () => {
    render(<Counter />);
    const setButton = screen.getByRole('button', { name: 'set' });
    await userEvent.click(setButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });
  test('renders Counter component with count 10 after set button click and input 10',async () => {
    render(<Counter />);
    const setButton = screen.getByRole('button', { name: 'set' });
    const input = screen.getByRole('spinbutton');
    await userEvent.type(input, '10');
    await userEvent.click(setButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('10');
  });
  test('elements are focused in the right order', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: '+' });
    const setButton = screen.getByRole('button', { name: 'set' });
    const input = screen.getByRole('spinbutton');
    userEvent.tab();
    expect(incrementButton).toHaveFocus();
    userEvent.tab();
    expect(input).toHaveFocus();
    userEvent.tab();
    expect(setButton).toHaveFocus();
  } );
});