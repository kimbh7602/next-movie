import { Suspense } from "react";
import MovieInfo from "components/movie/movie-info";
import MovieVideos from "components/movie/movie-videos";
import { getMovie } from "hooks/movie";

interface IParams {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: IParams) => {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
};

export default async function MovieDetail({ params: { id } }: IParams) {
  const movie: IMovie = await getMovie(id);
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo movie={movie} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
