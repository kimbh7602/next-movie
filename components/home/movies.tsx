"use client";

import React from "react";
import Slider from "react-slick";
import Movie from "./movie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styles from "styles/movie.module.css";
import * as S from "./styled";

interface IProps {
  movies: IHomeMovie[];
}

export default function Movies({ movies }: IProps) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <S.SlideWrapper>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            id={movie.id}
            backdrop_path={movie.backdrop_path}
          />
        ))}
      </Slider>
    </S.SlideWrapper>
    // <div className={styles.movie}>
    //   <img src={backdrop_path} alt={title} onClick={onClick} />
    //   {/* <Link prefetch href={`/movies/${id}`}>
    //     {title}
    //   </Link> */}
    // </div>
  );
}
