import { Suspense } from 'react';
import MovieDetail, { getMovie } from '../../components/movie-detail';
import Videos from '../../components/videos';
import { Params } from 'app/(movies)/common/interfaces';

export async function generateMetadata({ params: { id } }: Params) {
  const { title } = await getMovie(id);
  return {
    title,
  };
}

export default function Page({ params: { id } }: Params) {
  return (
    <>
      <Suspense fallback={<h3>Loading Movie...</h3>}>
        <MovieDetail id={id} />
      </Suspense>
      <Suspense fallback={<h3>Loading Videos...</h3>}>
        <Videos id={id} />
      </Suspense>
    </>
  );
}
