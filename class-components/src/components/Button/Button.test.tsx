import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

test('Button renders and clicks', async () => {
  const handleClick = vi.fn();
  render(
    <Button handleSearch={handleClick} isLoading={false}>
      Нажми
    </Button>
  );

  const button = screen.getByRole('button', { name: /нажми/i });
  await userEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test(`Button render but doesn't click when loading`, async () => {
  const handleClick = vi.fn();
  render(
    <Button handleSearch={handleClick} isLoading={true}>
      Нажми
    </Button>
  );

  const button = screen.getByRole('button', { name: /нажми/i });
  await userEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(0);
});
