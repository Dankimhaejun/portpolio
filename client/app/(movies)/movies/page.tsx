import Link from 'next/link';
import { Movie } from '../components/movie';
import { MOVIES_URL } from '../common/constants';

export const metadata = {
  title: 'Movies',
};

export default async function Page() {
  const movies: Movie[] = await fetch(MOVIES_URL).then((res) => res.json());

  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </>
  );
}
