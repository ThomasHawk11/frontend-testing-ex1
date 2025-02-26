import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with correct text and calls onClick when clicked', () => {
  const handleClick = jest.fn();

  render(<Button onClick={handleClick}>Click Me</Button>);

  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});