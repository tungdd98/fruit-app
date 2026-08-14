export const FRUIT_STATUSES = ['green', 'ripe', 'overripe'] as const;

export type FruitStatus = (typeof FRUIT_STATUSES)[number];

export const STATUS_LABELS: Record<FruitStatus, string> = {
  green: 'Xanh',
  ripe: 'Chín',
  overripe: 'Chín quá',
};

export interface Fruit {
  id: string;
  name: string;
  emoji: string;
  status: FruitStatus;
}

export const FRUITS: Fruit[] = [
  { id: 'banana', name: 'Banana', emoji: '🍌', status: 'ripe' },
  { id: 'apple', name: 'Apple', emoji: '🍎', status: 'ripe' },
  { id: 'kiwi', name: 'Kiwi', emoji: '🥝', status: 'green' },
  { id: 'grape', name: 'Grape', emoji: '🍇', status: 'overripe' },
];
