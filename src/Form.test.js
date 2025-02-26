// src/Form.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('renders form and validates fields', () => {
  render(<Form />);

  // Vérifier que le formulaire est rendu
  const nameInput = screen.getByLabelText(/Name:/i);
  const emailInput = screen.getByLabelText(/Email:/i);
  const passwordInput = screen.getByLabelText(/Password:/i);
  const submitButton = screen.getByText(/Submit/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  // Tester la validation des champs
  fireEvent.click(submitButton);

  // Vérifier que les messages d'erreur sont affichés
  expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Password is required/i)).toBeInTheDocument();

  // Remplir le formulaire avec des données valides
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Soumettre le formulaire
  fireEvent.click(submitButton);

  // Vérifier que les messages d'erreur ne sont plus affichés
  expect(screen.queryByText(/Name is required/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Password is required/i)).not.toBeInTheDocument();
});

test('validates password length', () => {
  render(<Form />);

  const passwordInput = screen.getByLabelText(/Password:/i);
  const submitButton = screen.getByText(/Submit/i);

  // Remplir le formulaire avec un mot de passe trop court
  fireEvent.change(passwordInput, { target: { value: '123' } });
  fireEvent.click(submitButton);

  // Vérifier que le message d'erreur pour le mot de passe est affiché
  expect(screen.getByText(/Password must be at least 6 characters/i)).toBeInTheDocument();
});