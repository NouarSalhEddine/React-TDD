import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './counter';
import userEvent from '@testing-library/user-event';


describe('Counter', () => {
  it('should render correctly', () => {
    render(<Counter count={0} />);
    const counterElement = screen.getByRole('heading', { name: '0' });
    expect(counterElement).toBeInTheDocument();
  }); 
  it('should increment correctly with mocking function', () => {
    const handleIncrement = jest.fn();
    render(<Counter count={0} handleIncrement={handleIncrement} />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    userEvent.click(incrementButton);
    expect(handleIncrement).toHaveBeenCalledTimes(1);
  });
 
  it('should decrement correctly with mocking function', () => {
    const handleDecrement = jest.fn();
    render(<Counter count={0} handleDecrement={handleDecrement} />);
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    userEvent.click(decrementButton);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
} );