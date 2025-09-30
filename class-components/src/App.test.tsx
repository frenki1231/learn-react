import { render, screen, waitFor } from '@testing-library/react';
import * as ItemModule from './components/Item/Item';
import App from './App';
import type { SuccessResponse } from './assets/type';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  const store: Record<string, string> = {};
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation(
    (key) => store[key] || ''
  );
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation((key, value) => {
    store[key] = value;
  });
  vi.spyOn(Storage.prototype, 'clear').mockImplementation(() => {
    Object.keys(store).forEach((key) => delete store[key]);
  });
});

test('App renders with mock data', async () => {
  const spyItem = vi.spyOn(ItemModule, 'default');
  const mockData: SuccessResponse = {
    results: [
      {
        id: 1,
        image: 'test url',
        name: 'Test Name',
        status: 'Alive',
        species: 'Human',
      },
      {
        id: 2,
        image: 'test url 2',
        name: 'Test Name 2',
        status: 'Dead',
        species: 'Pups',
      },
    ],
    info: {
      count: 2,
      next: null,
      pages: 1,
      prev: null,
    },
  };
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    } as Response)
  );
  render(<App />);

  await waitFor(() => {
    expect(spyItem).toHaveBeenCalledTimes(mockData.results.length);
  });
  spyItem.mockRestore();
});

test('App renders with error', async () => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.reject('API is down'),
    } as Response)
  );
  render(<App />);

  await waitFor(() => {
    expect(
      screen.getByText('Something went wrong. Please try again later.')
    ).toBeInTheDocument();
  });
});

test('App renders with error by api', async () => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ error: 'API is down' }),
    } as Response)
  );
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('API is down')).toBeInTheDocument();
  });
});

test('App check loading', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});

test('App check localStorage', async () => {
  localStorage.setItem('inputValue', 'test');
  render(<App />);

  const input = screen.getByDisplayValue('test');
  await userEvent.clear(input);
  await userEvent.type(input, 'Type something');
  const button = screen.getByRole('button', { name: /search/i });
  await userEvent.click(button);
  await waitFor(() => {
    expect(localStorage.getItem('inputValue')).toBe('Type something');
  });
});
