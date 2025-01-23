import { FC, PropsWithChildren } from 'react';

import { Footer, Header } from '@/common/modules';

const Template: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <div className="bg-gradient-to-45 flex min-h-screen flex-col from-green-100 to-green-900">
      <Header />
      <main className="max-w-8xl mx-auto min-h-[100vh] w-[calc(100%-2rem)] grow rounded bg-white px-24 pt-24 drop-shadow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Template;
