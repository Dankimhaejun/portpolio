import { Movie } from './movie';
import { MOVIES_URL } from '../common/constants';

import styles from '../styles/movie-detail.module.css';

interface MovieDetailProps {
  id: string;
}

export default async function MovieDetail({ id }: MovieDetailProps) {
  const movie: Movie = await fetch(`${MOVIES_URL}/${id}`).then((res) => res.json());
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>★ {movie.vote_average.toFixed(1)}</h3>
        <p className={styles.detail}>{movie.overview}</p>
      </div>
    </div>
  );
}
