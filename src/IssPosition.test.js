import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import IssPosition from './IssPosition';

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

it('should render the position', () => {
  act(() => {
    const position = {
      longitude: 24.091,
      latitude: -45.101
    };
    render(<IssPosition position={position} />, container);
  });

  expect(container.querySelector('#latitude span:last-child').textContent).toBe('-45.101');
  expect(container.querySelector('#longitude span:last-child').textContent).toBe('24.091');
});