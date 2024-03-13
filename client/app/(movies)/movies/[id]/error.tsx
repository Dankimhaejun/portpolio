'use client';

import { useParams } from 'next/navigation';

interface IError {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: IError) {
  const { id } = useParams();
  return (
    <>
      <h1>lol something broken... id:{id}</h1>
      <h2>{error.message}</h2>
      <button onClick={() => reset()}>reset</button>
    </>
  );
}
