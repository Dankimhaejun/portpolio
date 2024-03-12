export const metadata = {
  title: 'Movies',
};

const MOVIES_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const movies = await fetch(MOVIES_URL).then((res) => res.json());
  return <h1>{JSON.stringify(movies)}</h1>;
}
