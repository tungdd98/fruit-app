import { useMemo } from 'react';
import { Fruit, FRUITS } from './fruit';

export function useFruits(ripeness?: Fruit['ripeness']) {
  return useMemo(
    () => (ripeness ? FRUITS.filter((f) => f.ripeness === ripeness) : FRUITS),
    [ripeness]
  );
}
