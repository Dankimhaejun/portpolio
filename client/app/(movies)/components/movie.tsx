import { MOVIES_URL } from '../movies/page';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieProps {
  id: string;
}

const getMovie = async (id: string): Promise<Movie> =>
  fetch(`${MOVIES_URL}/${id}`).then((res) => res.json());

export default async function Movie({ id }: MovieProps) {
  const movie = await getMovie(id);

  return (
    <>
      <h1>{movie.title}</h1>
    </>
  );
}
