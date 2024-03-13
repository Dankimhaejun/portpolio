'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styles from '../styles/movie.module.css';

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
  id: number;
  poster_path: string;
  title: string;
}

export default async function Movie({ id, poster_path, title }: MovieProps) {
  const router = useRouter();
  function handleClick(id: number) {
    router.push(`/movies/${id}`);
  }

  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={() => handleClick(id)} />
      <Link prefetch href={`movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
