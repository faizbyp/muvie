"use client";
import { User } from "@/types/User";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create<User>()(
  persist(
    (set, get) => ({
      name: "User",
      bio: "Lorem ipsum dolor sit amet",
      savedMovies: [],

      setProfile: ({ name, bio }) => {
        set({ name: name, bio: bio });
      },

      addSavedMovies: (title: string, poster_path: string, vote_average: number, id: number) => {
        set((prev) => ({
          savedMovies: [
            ...prev.savedMovies,
            {
              id: id,
              title: title,
              poster_path: poster_path,
              vote_average: vote_average,
            },
          ],
        }));
      },

      removeSavedMovies: (id: number) => {
        set((prev) => ({
          savedMovies: prev.savedMovies.filter((movie) => movie.id !== id),
        }));
      },
    }),

    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
