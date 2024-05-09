"use client";

import Link from "next/link";
import styles from "styles/home.module.css";
import { useRouter } from "next/navigation";

export default function Poster({
  title,
  id,
  backdrop_path,
  overview,
}: IPoster) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.poster}>
      <img src={backdrop_path} alt={title} onClick={onClick} />
      <div className={styles.float}>
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
    </div>
  );
}
