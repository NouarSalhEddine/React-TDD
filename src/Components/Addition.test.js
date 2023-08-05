import React from 'react'
import {screen, render, fireEvent } from '@testing-library/react'
import Additiion from './Addition'

it('render the correct result after addition', () => {
  render(<Additiion />)
  const input1 = screen.getByLabelText('Number 1')
  const input2 = screen.getByLabelText('Number 2')
  const addButton = screen.getByText('Add') 
  fireEvent.change(input1, { target: { value: '3' } })
  fireEvent.change(input2, { target: { value: '5' } })
  fireEvent.click(addButton)
  const result = screen.getByText('Result: 8')
  expect(result).toBeInTheDocument()
})