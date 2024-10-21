import placeholder from "../../../../shared/assets/images/placeholder.jpg";
import { Text } from "../../../../shared/ui";
import { EPoster, type Media } from "../../types";
import styles from "./MediaCard.module.css";

export function MediaCard({ media }: { media: Media }) {
  return (
    <div className={styles.mediaContainer} key={media.imdbID}>
      {media.Poster === EPoster.N_A ? (
        <div className={styles.imagePlaceholder}>
          <img src={placeholder} alt="placeholder" />
        </div>
      ) : (
        <img className={styles.mediaImage} src={media.Poster} alt="img" />
      )}

      <div>
        <Text size="md">Name {media.Title}</Text>
        <Text size="md">Year {media.Year}</Text>
        <Text size="md">imdbID {media.imdbID}</Text>
        <Text size="md">Type {media.Type}</Text>
      </div>
    </div>
  );
}
