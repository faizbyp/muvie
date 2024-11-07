"use client";
import MovieCard from "@/components/MovieCard";
import { CardSkeleton } from "@/components/Skeleton";
import useFetch from "@/hooks/useFetch";
import useUserStore from "@/hooks/useUserStore";
import { Movie } from "@/types/Movie";
import { fetcher } from "@/utils/api";
import { Box, Container, Typography, Grid2 as Grid, Pagination } from "@mui/material";
import { ChangeEvent, useState } from "react";
import useSWR from "swr";

interface AppProps {
  movies: Movie[];
}

const App = () => {
  const name = useUserStore((state) => state.name);
  const bio = useUserStore((state) => state.bio);
  const [page, setPage] = useState(1);
  // use swr to cache data
  const { data: movies } = useSWR(`/discover/movie?page=${page}`, fetcher, {
    keepPreviousData: true, // cache data
  });
  // const { data: movies } = useFetch<any>(`/discover/movie?page=${page}`);

  const handlePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container maxWidth="md" component="main">
      <Box component="nav" sx={{ display: "flex", gap: 8 }}>
        <Typography>Home</Typography>
        <Typography>Muvies</Typography>
        <Typography>Profile</Typography>
      </Box>
      <Box sx={{ my: 8 }}>
        <Typography variant="display2" color="primary">
          Hi, {name}
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid size={{ xs: 12, sm: 6 }} component="section">
          <Typography variant="h1" color="primary">
            Profile
          </Typography>
          <Typography fontWeight="bold">Name</Typography>
          <Typography>{name}</Typography>
          <Typography fontWeight="bold">Bio</Typography>
          <Typography>{bio}</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} component="section">
          <Typography variant="h1" color="primary">
            Profile
          </Typography>
          <Typography fontWeight="bold">Name</Typography>
          <Typography>{name}</Typography>
          <Typography fontWeight="bold">Bio</Typography>
          <Typography>{bio}</Typography>
        </Grid>
      </Grid>

      <Box component="section">
        <Typography variant="h1" color="primary">
          Discover Muvies
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <Pagination
            count={10}
            page={page}
            onChange={handlePage}
            shape="rounded"
            color="primary"
          />
        </Box>
        <Grid container spacing={2}>
          {movies ? (
            movies.results.map((movie: Movie) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.id}>
                <MovieCard
                  title={movie.title}
                  poster_path={movie.poster_path}
                  vote_average={movie.vote_average}
                />
              </Grid>
            ))
          ) : (
            <CardSkeleton />
          )}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <Pagination
            count={10}
            page={page}
            onChange={handlePage}
            shape="rounded"
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
