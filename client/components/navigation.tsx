import Link from 'next/link';
import { headers } from 'next/headers';


export default function Navigation() {
  const headersList = headers();
  const path = headersList.get('x-pathname') || '';

  return (
    <nav>
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
        <li>
          <button onClick={() => setCount((p) => p + 1)}>count: {count}</button>
        </li>
      </ul>
    </nav>
  );
}
