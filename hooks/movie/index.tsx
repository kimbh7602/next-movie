import { API_URL } from "constant";

export const getMovie = async (id: string) => {
  const resp = await fetch(`${API_URL}/${id}`);

  return resp.json();
};

export const getVideos = async (id: string) => {
  const resp = await fetch(`${API_URL}/${id}/videos`);

  const body = await resp?.json();
  let videos = [];

  if (body?.length > 4) {
    videos = body?.slice(0, 4);
  } else {
    videos = body;
  }

  return videos;
};
