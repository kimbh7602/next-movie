import { API_URL } from "../app/(home)/page";

const getVideos = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("something broke");
  // const resp = await fetch(`${API_URL}/${id}/videos`);

  // return resp.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
