import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with correct text and calls onClick when clicked', () => {
  // Créer une fonction mock pour simuler le clic
  const handleClick = jest.fn();

  // Rendre le composant Button avec un texte et la fonction mock
  render(<Button onClick={handleClick}>Click Me</Button>);

  // Vérifier que le texte du bouton est correct
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();

  // Simuler un clic sur le bouton
  fireEvent.click(buttonElement);

  // Vérifier que la fonction mock a été appelée
  expect(handleClick).toHaveBeenCalledTimes(1);
});