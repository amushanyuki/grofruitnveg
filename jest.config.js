// Add.to.cart.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with correct text', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Add to Cart</Button>);
  const button = getByText('Click me');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
