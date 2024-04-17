import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../../constant";

export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  const resp = await fetch(API_URL);
  const json = await resp.json();
  return json;
};

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
