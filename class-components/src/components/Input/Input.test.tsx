import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

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

test('Input renders ', async () => {
  localStorage.setItem('inputValue', 'test');
  const handleInputValue = vi.fn();
  render(<Input handleInputValue={handleInputValue} />);

  const input = screen.getByRole('textbox');
  expect(input).toHaveValue('test');
});

test('Input render and change', async () => {
  localStorage.setItem('inputValue', '');
  const handleInputValue = vi.fn();
  render(<Input handleInputValue={handleInputValue} />);

  const input = screen.getByDisplayValue('');
  await userEvent.type(input, 'Type something');

  await waitFor(() => {
    expect(handleInputValue).toHaveBeenCalledTimes(14);
    expect(handleInputValue).toHaveBeenLastCalledWith('Type something');
  });
});
