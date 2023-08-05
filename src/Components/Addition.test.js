import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Additiion from './Addition'

it('render the correct result after addition', () => {
  const { getByLabelText, getByText } = render(<Additiion />)
  const input1 = getByLabelText('Number 1')
  const input2 = getByLabelText('Number 2')
  const addButton = getByText('Add') 
  fireEvent.change(input1, { target: { value: '3' } })
  fireEvent.change(input2, { target: { value: '5' } })
  fireEvent.click(addButton)
  const result = getByText('Result: 8')
  expect(result).toBeInTheDocument()
})