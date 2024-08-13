import type { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from '../../components/lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const nowPlaying = await getNowPlaying();

  if (nowPlaying && nowPlaying.is_playing) {
    res.status(200).json(nowPlaying);
  } else {
    res.status(204).json({ message: 'No content' }); // Se não estiver tocando nada
  }
}
