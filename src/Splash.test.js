import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Splash from './Splash';

jest.useFakeTimers();

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should count for five seconds', () => {
  act(() => render(<Splash />, container));
  expect(container.querySelector('#counter').textContent).toBe('5');

  act(() => jest.advanceTimersByTime(1000));
  expect(container.querySelector('#counter').textContent).toBe('4');

  act(() => jest.advanceTimersByTime(1000));
  expect(container.querySelector('#counter').textContent).toBe('3');

  act(() => jest.advanceTimersByTime(1000));
  expect(container.querySelector('#counter').textContent).toBe('2');

  act(() => jest.advanceTimersByTime(1000));
  expect(container.querySelector('#counter').textContent).toBe('1');

  act(() => jest.advanceTimersByTime(1000));
  expect(container.querySelector('#counter').textContent).toBe('Lift off');
});
