import type { FC } from 'react';

import { Product } from '@/common/types/types';
import { Htag, Ptag } from '@/common/ui';

import { Slider } from './components';

type TPagination = {
  has_more: boolean;
  page: number;
  per_page: number;
  total: number;
};

export const ProductCard: FC = async () => {
  const response = await fetch(
    'https://www.greatfrontend.com/api/projects/challenges/e-commerce/products'
  );

  const { data } = (await response.json()) as {
    data: Product[];
    pagination: TPagination;
  };

  const currentProduct = data[2];

  return (
    <section className="grid grid-cols-12 gap-x-8 pb-24">
      <div className="col-span-6">
        <Slider images={currentProduct.images} />
      </div>
      <div className="col-span-6 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-6">
          <Htag tag="h3">{currentProduct.name}</Htag>
          <div className="flex gap-x-2">
            <span className="text-3xl">
              ${currentProduct.priceRange.lowest}
            </span>
            <span className="text-2xl line-through">
              ${currentProduct.priceRange.highest}
            </span>
          </div>
        </div>
        <Ptag>{currentProduct.description}</Ptag>
      </div>
    </section>
  );
};
