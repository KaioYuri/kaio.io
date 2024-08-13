'use client'; // Isso força o componente a ser tratado como um Client Component

import useSWR from 'swr';

export default function Page() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: nowPlaying } = useSWR('/api/spotify/now-playing', fetcher);

  return (
    <section>
      <h1>Now Playing</h1>
      {nowPlaying ? (
        <div>
          <p>{nowPlaying.item.name}</p>
          <p>{nowPlaying.item.artists.map((artist: any) => artist.name).join(', ')}</p>
        </div>
      ) : (
        <p>No music is playing right now</p>
      )}
    </section>
  );
}
