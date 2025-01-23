import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

type THtag = HTMLAttributes<HTMLHeadingElement> & {
  tag: 'h1' | 'h2' | 'h3';
};

export const Htag: FC<PropsWithChildren<THtag>> = ({
  tag,
  children,
  ...props
}) => {
  let htag;

  switch (tag) {
    case 'h1': {
      htag = (
        <h1 className="text-6xl" {...props}>
          {children}
        </h1>
      );
      break;
    }
    case 'h2': {
      htag = (
        <h1 className="text-5xl" {...props}>
          {children}
        </h1>
      );
      break;
    }
    case 'h3': {
      htag = (
        <h1 className="text-4xl" {...props}>
          {children}
        </h1>
      );
      break;
    }
  }
  return <hgroup>{htag}</hgroup>;
};
