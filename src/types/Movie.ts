export type MovieCard = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export type Movie = MovieCard & {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  release_date?: Date;
  tagline?: string;
  homepage?: string;
  video?: boolean;
  vote_count?: number;
};
