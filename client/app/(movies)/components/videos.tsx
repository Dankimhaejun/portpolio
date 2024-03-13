import { MOVIES_URL } from '../common/constants';

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

interface VideosProps {
  id: string;
}

const getVideos = async (id: string): Promise<Video[]> =>
  fetch(`${MOVIES_URL}/${id}/videos`).then((res) => res.json());

export default async function Videos({ id }: VideosProps) {
  const videos = await getVideos(id);

  return <h2>{JSON.stringify(videos)}</h2>;
}
