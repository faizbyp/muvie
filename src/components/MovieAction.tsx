"use client ";
import useUserStore from "@/hooks/useUserStore";
import { MovieCard } from "@/types/Movie";
import { Button } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

const MovieAction = ({ id, title, poster_path, vote_average }: MovieCard) => {
  const savedMovies = useUserStore((state) => state.savedMovies);
  const addSavedMovies = useUserStore((state) => state.addSavedMovies);
  const removeSavedMovies = useUserStore((state) => state.removeSavedMovies);

  return (
    <>
      {savedMovies.some((movie) => movie.id === id) ? (
        <Button
          variant="contained"
          color="error"
          onClick={() => removeSavedMovies(id)}
          startIcon={<BookmarkRemoveIcon />}
        >
          Remove Movie
        </Button>
      ) : (
        <Button
          variant="contained"
          color="success"
          onClick={() => addSavedMovies(title, poster_path, vote_average, id)}
          startIcon={<BookmarkAddIcon />}
        >
          Save Movie
        </Button>
      )}
    </>
  );
};
export default MovieAction;
