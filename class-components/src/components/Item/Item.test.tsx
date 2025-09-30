import type { ItemType } from '../../assets/type';
import Item from './Item';
import { render, screen } from '@testing-library/react';
test('Item renders', async () => {
  const item: ItemType = {
    id: 1,
    image: 'test url',
    name: 'Test Name',
    status: 'Alive',
    species: 'Human',
  };
  render(<Item item={item} />);

  const name = screen.getByRole('heading', { level: 2, name: /Test Name/i });
  const img = screen.getByRole('img', { name: /Test Name/i });
  const description = screen.getByText(/Human - Alive/i);

  expect(name).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
