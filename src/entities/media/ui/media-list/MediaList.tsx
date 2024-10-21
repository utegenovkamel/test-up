import type { Media } from "../../types";
import { MediaCard } from "../media-card";
import styles from "./MediaList.module.css";

export function MediaList({ medias }: { medias: Media[] }) {
  return (
    <div className={styles.mediaList}>
      {medias.map((media) => {
        return <MediaCard key={media.imdbID} media={media} />;
      })}
    </div>
  );
}
