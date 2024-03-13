import Link from 'next/link';
import { headers } from 'next/headers';

import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const headersList = headers();
  const path = headersList.get('x-pathname') || '';

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === '/' ? '✅' : ''}
        </li>
        <li>
          <Link href="/about-us">About Us</Link> {path === '/about-us' ? '✅' : ''}
        </li>
        <li>
          <Link href="/movies">Movies</Link> {path.includes('/movies') ? '✅' : ''}
        </li>
      </ul>
    </nav>
  );
}
