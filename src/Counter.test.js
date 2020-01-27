import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Counter from './Counter';

it('рендер и обновление счётчика', () => {
  // Тестируем первый рендер и метод componentDidMount
  const { container } = render(<Counter />);
  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe('Вы нажали на кнопку 0 раз');
  expect(document.title).toBe('Вы нажали на кнопку 0 раз');

  // Тестируем второй рендер и метод componentDidUpdate
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(label.textContent).toBe('Вы нажали на кнопку 1 раз');
  expect(document.title).toBe('Вы нажали на кнопку 1 раз');
});