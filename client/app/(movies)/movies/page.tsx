import Movie, { Movie as IMovie } from '../components/movie';
import { MOVIES_URL } from '../common/constants';
import styles from '../styles/movies.module.css';

export const metadata = {
  title: 'Movies',
};

export default async function Page() {
  const movies: IMovie[] = await fetch(MOVIES_URL).then((res) => res.json());

  return (
    <div className={styles.wrapper}>
      {movies.map(({ id, poster_path, title }) => (
        <Movie id={id} key={id} poster_path={poster_path} title={title} />
      ))}
    </div>
  );
}
