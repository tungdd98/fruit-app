import { useCallback, useState } from 'react';
import { FruitStatus } from './fruit';
import { useFruits } from './use-fruits';

export function useFruitFilter() {
  const [status, setStatus] = useState<FruitStatus | undefined>();
  const fruits = useFruits(status);

  const toggle = useCallback((next: FruitStatus | null) => {
    setStatus(next ?? undefined);
  }, []);

  return { fruits, status, toggle };
}
