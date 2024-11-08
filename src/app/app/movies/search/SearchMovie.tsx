"use client";

import MovieCard from "@/components/MovieCard";
import { CardSkeleton } from "@/components/Skeleton";
import { Movie } from "@/types/Movie";
import { fetcher } from "@/utils/api";
import { Box, Pagination, TextField, Grid2 as Grid, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import useSWR from "swr";

const SearchMovie = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { data: movies } = useSWR(`/search/movie?query=${search}&page=${page}`, fetcher);

  const handlePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        setSearch(event.target.value);
        resolve();
      }, 300);
    });
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h1" color="primary">
            Search Movies
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField label="Movie Title" onChange={handleSearch} fullWidth sx={{ mb: 2 }} />
        </Grid>
      </Grid>
      {!search && (
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Typography color="text.secondary">Start typing to search</Typography>
        </Box>
      )}
      {movies ? (
        <Grid container spacing={2}>
          {movies.results.map((movie: Movie) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.id}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CardSkeleton />
      )}
      {search && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <Pagination
            count={10}
            page={page}
            onChange={handlePage}
            shape="rounded"
            color="primary"
          />
        </Box>
      )}
    </>
  );
};
export default SearchMovie;
