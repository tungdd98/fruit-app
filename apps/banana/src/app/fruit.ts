export interface Fruit {
  id: string;
  name: string;
  emoji: string;
  status: 'green' | 'ripe' | 'overripe';
}

export const FRUITS: Fruit[] = [
  { id: 'banana', name: 'Banana', emoji: '🍌', status: 'ripe' },
  { id: 'apple', name: 'Apple', emoji: '🍎', status: 'ripe' },
  { id: 'kiwi', name: 'Kiwi', emoji: '🥝', status: 'green' },
];
