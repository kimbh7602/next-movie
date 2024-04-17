export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const resp = await fetch(URL);
  const json = await resp.json();
  return json;
};

export default async function Home() {
  const movies = await getMovies();

  return <div>{JSON.stringify(movies)}</div>;
}
