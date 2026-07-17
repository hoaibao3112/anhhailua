import { type FC } from 'react';
import { ChickenCard } from './ChickenCard';
import { chickensDetailData } from '@/lib/data';

const chickensData = Object.values(chickensDetailData).map((c, i) => ({
  ...c,
  // Keep delay staggered in grid rows of 3 items
  delayMs: (i % 3) * 100
}));

export const ChickenList: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {chickensData.map((chicken) => (
        <ChickenCard key={chicken.id} chicken={chicken} />
      ))}
    </div>
  );
};
