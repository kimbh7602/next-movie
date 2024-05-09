"use client";

import Link from "next/link";
import styles from "styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: number;
  backdrop_path: string;
}

export default function Movie({ title, id, backdrop_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={backdrop_path} alt={title} onClick={onClick} />
      {/* <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link> */}
    </div>
  );
}
