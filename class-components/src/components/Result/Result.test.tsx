import type { SuccessResponse } from '../../assets/type';
import * as ListItemsModule from '../ListItems/ListItems';
import { render, screen } from '@testing-library/react';
import { Result } from './Result';
test('Result renders with ListItems', async () => {
  const spy = vi.spyOn(ListItemsModule, 'default');
  const props = {
    data: {
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
    } satisfies SuccessResponse,
    error: null,
  };
  render(<Result {...props} />);

  expect(spy).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});

test('Result renders with error', async () => {
  const props = {
    data: null,
    error: 'Failed to fetch data',
  };
  render(<Result {...props} />);

  expect(screen.getByText('Failed to fetch data')).toBeInTheDocument();
});
