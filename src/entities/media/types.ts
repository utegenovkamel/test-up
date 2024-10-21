export enum EMediaType {
  movie = "movie",
  series = "series",
}

export enum EPoster {
  N_A = "N/A",
}

export interface Media {
  Title: string;
  Year: string;
  imdbID: string;
  Type: EMediaType;
  Poster: string | EPoster;
}
