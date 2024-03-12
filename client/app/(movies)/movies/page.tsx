import Link from 'next/link';
import { Movie } from '../components/movie';

export const metadata = {
  title: 'Movies',
};

export const MOVIES_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

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
