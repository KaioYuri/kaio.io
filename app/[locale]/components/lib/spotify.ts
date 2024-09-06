const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  if (!refresh_token) {
    throw new Error('Missing Spotify refresh token');
  }

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch access token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    throw error; // Rethrow the error so that the caller can handle it
  }
};

export const getNowPlaying = async () => {
  const access_token = await getAccessToken();

  try {
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch now playing: ${response.statusText}`);
    }

    return await response.json(); // Retorna os dados em JSON
  } catch (error) {
    console.error('Error fetching now playing data:', error);
    return null; // Retorna null ou uma resposta padrão em caso de erro
  }
};

export const getTopTracks = async () => {
  const access_token = await getAccessToken();

  try {
    const response = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch top tracks: ${response.statusText}`);
    }

    return await response.json(); // Retorna os dados em JSON
  } catch (error) {
    console.error('Error fetching top tracks data:', error);
    return null; // Retorna null ou uma resposta padrão em caso de erro
  }
};
