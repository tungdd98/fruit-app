import { useMemo } from 'react';
import { Fruit, FRUITS } from './fruit';

export function useFruits(status?: Fruit['status']) {
  return useMemo(
    () => (status ? FRUITS.filter((f) => f.status === status) : FRUITS),
    [status],
  );
}
