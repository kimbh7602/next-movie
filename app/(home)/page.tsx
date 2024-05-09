import Movie from "components/home/movie";
import styles from "styles/home.module.css";
import { API_URL } from "constant";
import Poster from "components/home/poster";
import Movies from "components/home/movies";

export const metadata = {
  title: "Home",
};

const getMovies = async (): Promise<IHomeMovie[]> => {
  const resp = await fetch(API_URL);
  const json: Array<IHomeMovie> = await resp.json();
  return json;
};

const getPoster = async (): Promise<IPoster> => {
  const resp = await fetch(API_URL);
  const json = await resp.json();
  const poster = json?.[0];
  return poster;
};

export default async function Home() {
  const movies = await getMovies();
  const poster = await getPoster();

  return (
    <div className={styles.container}>
      <Poster
        title={poster.title}
        id={poster.id}
        backdrop_path={poster.backdrop_path}
        overview={poster.overview}
      />
      <Movies movies={movies} />
      {/* <div className={styles.movies}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            id={movie.id}
            backdrop_path={movie.backdrop_path}
          />
        ))}
      </div> */}
    </div>
  );
}
