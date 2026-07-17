import { type FC } from 'react';
import { ChickenCard } from './ChickenCard';

interface ChickenListProps {
  chickens: any[];
}

export const ChickenList: FC<ChickenListProps> = ({ chickens }) => {
  const chickensData = chickens.map((c, i) => ({
    ...c,
    // Keep delay staggered in grid rows of 3 items
    delayMs: (i % 3) * 100
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {chickensData.map((chicken) => (
        <ChickenCard key={chicken.id} chicken={chicken} />
      ))}
    </div>
  );
};
