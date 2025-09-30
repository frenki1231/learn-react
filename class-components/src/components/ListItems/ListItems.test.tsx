import type { ItemType } from '../../assets/type';
import * as ItemModule from '../Item/Item';
import { render, screen } from '@testing-library/react';
import ListItems from './ListItems';
test('ListItems renders with array items', async () => {
  const spy = vi.spyOn(ItemModule, 'default');
  const items: ItemType[] = [
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
  ];
  render(<ListItems items={items} />);

  expect(spy).toHaveBeenCalledTimes(items.length);
  spy.mockRestore();
});

test('ListItems renders with empty array', async () => {
  const items: ItemType[] = [];
  render(<ListItems items={items} />);

  expect(screen.getByText('No results')).toBeInTheDocument();
});
