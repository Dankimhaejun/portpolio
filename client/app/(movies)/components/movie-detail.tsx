import { MOVIES_URL } from '../common/constants';
import { Movie } from './movie';

interface MovieDetailProps {
  id: string;
}

export default async function MovieDetail({ id }: MovieDetailProps) {
  const movie: Movie = await fetch(`${MOVIES_URL}/${id}`).then((res) => res.json());
  return <div>{movie.title}</div>;
}
