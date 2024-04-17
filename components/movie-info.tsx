import { API_URL } from "../app/(home)/page";

const getMovie = async (id: string) => {
  const resp = await fetch(`${API_URL}/${id}`);

  return resp.json();
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
