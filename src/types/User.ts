import { Movie } from "./Movie";

export type UserProfile = {
  name: string;
  bio: string;
};

type UserData = UserProfile & {
  savedMovies: Movie[];
  watchedMovies: Movie[];
};

type UserAction = {
  setProfile: ({ name, bio }: UserProfile) => void;
};

export type User = UserData & UserAction;
