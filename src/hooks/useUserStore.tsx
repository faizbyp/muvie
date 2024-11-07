"use client";

import { User } from "@/types/User";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create<User>()(
  persist(
    (set) => ({
      name: "User",
      bio: "Lorem ipsum dolor sit amet",
      savedMovies: [],
      watchedMovies: [],

      setProfile: ({ name, bio }) => {
        set({ name: name, bio: bio });
      },
    }),

    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
