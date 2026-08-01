export interface Fruit {
  id: string;
  name: string;
  emoji: string;
  ripeness: 'green' | 'ripe' | 'overripe';
}

export const FRUITS: Fruit[] = [
  { id: 'banana', name: 'Banana', emoji: '🍌', ripeness: 'ripe' },
  { id: 'apple', name: 'Apple', emoji: '🍎', ripeness: 'ripe' },
  { id: 'kiwi', name: 'Kiwi', emoji: '🥝', ripeness: 'green' },
];
