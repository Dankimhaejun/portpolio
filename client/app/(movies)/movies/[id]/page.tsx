import { Suspense } from 'react';
import Movie from '../../components/movie';
import Videos from '../../components/videos';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movie',
};

interface PageProps {
  params: { id: string };
}

export default function Page({ params: { id } }: PageProps) {
  return (
    <>
      <h1>Movie Page</h1>
      <Suspense fallback={<h3>Loading Movie...</h3>}>
        <Movie id={id} />
      </Suspense>
      <Suspense fallback={<h3>Loading Videos...</h3>}>
        <Videos id={id} />
      </Suspense>
    </>
  );
}
