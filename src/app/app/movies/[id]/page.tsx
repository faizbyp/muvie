import MovieAction from "@/components/MovieAction";
import { Movie } from "@/types/Movie";
import TMDB from "@/utils/api";
import { IMAGE_URL } from "@/utils/constant";
import { Box, Chip, Container, Grid2 as Grid, Link as MuiLink, Typography } from "@mui/material";
import Image from "next/image";
import MovieDetails from "./MovieDetails";

export default async function MovieDetailsPage({ params }: any) {
  let movie: Movie = { id: 0, title: "", poster_path: "", vote_average: 0 };
  try {
    const get = await TMDB.get(`/movie/${params.id}`);
    movie = get.data;
  } catch (error: any) {
    console.error(error.message);
  }

  return (
    <MovieDetails
      title={movie.title}
      poster_path={movie.poster_path}
      tagline={movie.tagline}
      overview={movie.overview}
      homepage={movie.homepage}
      popularity={movie.popularity}
      vote_average={movie.vote_average}
      id={movie.id}
    />
  );
}
