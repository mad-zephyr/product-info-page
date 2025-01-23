import { FC, HTMLAttributes, PropsWithChildren } from 'react';

type TPill = HTMLAttributes<HTMLSpanElement> & {};

export const Pill: FC<PropsWithChildren<TPill>> = ({ children, ...props }) => {
  return (
    <span className="p-x-[10px] p-y-2 flex" {...props}>
      {children}
    </span>
  );
};
