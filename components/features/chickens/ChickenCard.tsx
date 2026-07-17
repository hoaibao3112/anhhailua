import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import type { ChickenBreed } from '@/types/models.types';
import { ScrollReveal } from './ScrollReveal';

interface ChickenCardProps {
  chicken: ChickenBreed;
}

export const ChickenCard: FC<ChickenCardProps> = ({ chicken }) => {
  const { id, name, price, description, imageUrl, tag, delayMs } = chicken;

  return (
    <ScrollReveal delayMs={delayMs}>
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-outline-variant/20 flex flex-col h-full">
        <div className="h-80 relative overflow-hidden bg-secondary-fixed">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {tag && (
            <div className="absolute top-4 left-4">
              <span className="bg-tertiary text-white px-3 py-1 rounded-full text-label-sm font-medium">
                {tag}
              </span>
            </div>
          )}
        </div>
        <div className="p-8 flex flex-col flex-1 justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-headline-md text-headline-md text-on-surface line-clamp-1">
                {name}
              </h3>
              <span className="text-tertiary font-bold font-headline-md whitespace-nowrap">
                {price}
              </span>
            </div>
            <p className="text-on-surface-variant text-body-md line-clamp-2">
              {description}
            </p>
          </div>
          <Link
            href={`/products/${id}`}
            className="w-full py-3 bg-surface-container rounded-xl font-label-md text-on-surface font-semibold hover:bg-tertiary hover:text-on-tertiary active:scale-95 transition-all cursor-pointer text-center block"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
};
