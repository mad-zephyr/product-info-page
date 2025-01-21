import { FC, PropsWithChildren } from 'react';

import { Footer, Header } from '@/common/modules';

const Template: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Template;
