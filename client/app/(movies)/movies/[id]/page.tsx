import { MOVIES_URL } from '../page';

interface MovieProps {
  params: { id: string };
}

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

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

const getMovie = async (id: string): Promise<Movie> =>
  fetch(`${MOVIES_URL}/${id}`).then((res) => res.json());
const getVideos = async (id: string): Promise<Video[]> =>
  fetch(`${MOVIES_URL}/${id}/videos`).then((res) => res.json());

export default async function Page({ params: { id } }: MovieProps) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log('videos', videos);
  return (
    <>
      <h1>{movie.title}</h1>
      <h2>{videos.map((video) => video.name)[0]}</h2>
    </>
  );
}
