"use client ";
import useUserStore from "@/hooks/useUserStore";
import { MovieCard } from "@/types/Movie";
import { Button } from "@mui/material";

const MovieAction = ({ id, title, poster_path, vote_average }: MovieCard) => {
  const savedMovies = useUserStore((state) => state.savedMovies);
  const addSavedMovies = useUserStore((state) => state.addSavedMovies);
  const removeSavedMovies = useUserStore((state) => state.removeSavedMovies);

  console.log(
    !savedMovies,
    savedMovies.length === 0,
    savedMovies.some((movie) => movie?.id !== id)
  );

  return (
    <>
      {savedMovies.some((movie) => movie.id === id) ? (
        <Button variant="contained" color="error" onClick={() => removeSavedMovies(id)}>
          Remove Movie
        </Button>
      ) : (
        <Button
          variant="contained"
          color="success"
          onClick={() => addSavedMovies(title, poster_path, vote_average, id)}
        >
          Save Movie
        </Button>
      )}
    </>
  );
};
export default MovieAction;
