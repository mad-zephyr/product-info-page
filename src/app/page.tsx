import { ProductCard } from '@/common/modules';

import styles from './page.module.sass';

export default async function Home() {
  return (
    <main className={styles.main}>
      <ProductCard />
    </main>
  );
}
