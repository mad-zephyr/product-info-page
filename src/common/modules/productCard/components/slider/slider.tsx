'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import { type FC, useState } from 'react';

import type { TImage } from '@/common/types/types';

type TSlider = {
  images: TImage[];
};

export const Slider: FC<TSlider> = ({ images }) => {
  const [active, setActive] = useState(0);

  const handleSetActive = (i: number) => {
    setActive(i);
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="aspect-1.3513 relative rounded-sm">
        <Image
          fill
          alt={images[active]?.color}
          src={images[active].image_url}
          className="rounded-sm object-cover"
        />
      </div>
      <div className="relative flex max-h-[190px] w-auto snap-x gap-x-4 overflow-x-scroll">
        {images.length > 1 &&
          images.map((img, i) => (
            <figure
              key={i}
              onClick={() => handleSetActive(i)}
              className={clsx(
                'relative h-[190px] cursor-pointer snap-start rounded object-cover',
                {
                  ['w-[50%]']: images.length <= 2,
                  ['w-[33.33%]']: images.length === 3,
                  ['w-[160px] min-w-[160px]']: images.length > 3,
                  ['border-2 border-indigo-800']: active === i,
                }
              )}
            >
              <Image
                alt="sdf"
                src={img.image_url}
                fill
                className="rounded-sm object-cover"
              />
            </figure>
          ))}
      </div>
    </div>
  );
};
