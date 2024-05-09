"use client";

import { API_URL } from "constant";
import styles from "styles/movie-info.module.css";
import * as S from "./styles";

interface IProps {
  movie: IMovie;
}

export default async function MovieInfo({ movie }: IProps) {
  return (
    <S.MovieContainer>
      <S.MoviePoster src={movie?.poster_path} alt={movie?.title} />
      <S.MovieInfo>
        <S.MovieTitle>{movie.title}</S.MovieTitle>
        <h3>⭐️ {movie.vote_average?.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage →
        </a>
      </S.MovieInfo>
    </S.MovieContainer>
  );
}
