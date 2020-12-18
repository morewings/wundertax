import { sortBy, split, flow, map, find, join } from 'lodash/fp'
import { useLibraryContext } from './context';

export const useGetItemList = () => {
  const { state: { books, magazines } } = useLibraryContext();
  return sortBy([({ title }) => title], [...books, ...magazines]);
}

export const useGetAuthorName = (email) => {
  const { state: { authors } } = useLibraryContext();
  return flow(
    split(','),
    map(emailId => find(({ email }) => email === emailId, authors)),
    map(({ firstname, lastname }) => `${firstname} ${lastname}`),
    join(', '),
  )(email);
}
