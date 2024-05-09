import { API_URL } from "constant";
import styles from "styles/movie-videos.module.css";

const getVideos = async (id: string) => {
  const resp = await fetch(`${API_URL}/${id}/videos`);

  const body = await resp?.json();
  let videos = [];

  if (body?.length > 4) {
    videos = body?.slice(0, 4);
  } else {
    videos = body;
  }

  return videos;
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos?.length > 1 ? (
        <>
          {videos.map((video) => (
            <iframe
              key={video.id}
              src={`https://youtube.com/embed/${video.key}`}
              title={video.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ))}
        </>
      ) : (
        <div>No Videos</div>
      )}
    </div>
  );
}
