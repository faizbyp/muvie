import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeType = {
  theme: "light" | "dark";
  setTheme: (value: ThemeType["theme"]) => void;
};

const useThemeStore = create<ThemeType>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (value: ThemeType["theme"]) => {
        set({ theme: value });
      },
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;
