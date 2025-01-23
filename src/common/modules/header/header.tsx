import { FC } from 'react';

import LogoMark from '@/common/assets/logo.svg';

export const Header: FC = () => {
  return (
    <header
      className={`flex w-[calc(100%-2rem)] max-w-[1440px] items-center justify-between gap-24 self-center px-6 py-3`}
    >
      <div className="flex items-center gap-0">
        <LogoMark />
        <span className="font-bold">StyleNest</span>
      </div>
      <nav className="flex grow items-center">
        <ul className="flex h-min items-center gap-8">
          <li className="h-min">Shop all</li>
          <li className="h-min">Latest arrivals</li>
        </ul>
      </nav>
      <div>Cart</div>
    </header>
  );
};
