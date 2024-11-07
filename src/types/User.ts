import { MovieCard } from "./Movie";

export type UserProfile = {
  name: string;
  bio: string;
};

type UserData = UserProfile & {
  savedMovies: MovieCard[];
};

type UserAction = {
  setProfile: ({ name, bio }: UserProfile) => void;
  addSavedMovies: (title: string, poster_path: string, vote_average: number, id: number) => void;
  removeSavedMovies: (id: number) => void;
};

export type User = UserData & UserAction;
