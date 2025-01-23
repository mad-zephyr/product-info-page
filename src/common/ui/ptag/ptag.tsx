import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

type TPtag = HTMLAttributes<HTMLParagraphElement> & {};

export const Ptag: FC<PropsWithChildren<TPtag>> = ({ children, ...props }) => {
  return (
    <p className="text-base text-neutral-600" {...props}>
      {children}
    </p>
  );
};
