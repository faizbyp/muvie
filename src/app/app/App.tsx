"use client";
import MovieCard from "@/components/MovieCard";
import { CardSkeleton } from "@/components/Skeleton";
import useFetch from "@/hooks/useFetch";
import { NumericFormat } from "react-number-format";
import useUserStore from "@/hooks/useUserStore";
import { Movie } from "@/types/Movie";
import { fetcher } from "@/utils/api";
import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  Pagination,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import useSWR from "swr";

interface AppProps {
  movies: Movie[];
}

const sortBy = [
  {
    name: "---",
    value: "",
  },
  {
    name: "Original Title - Ascending",
    value: "original_title.asc",
  },
  {
    name: "Original Title - Descending",
    value: "original_title.desc",
  },
  {
    name: "Popularity - Ascending",
    value: "popularity.asc",
  },
  {
    name: "Popularity - Descending",
    value: "popularity.desc",
  },
  {
    name: "Release Date - Ascending",
    value: "primary_release_date.asc",
  },
  {
    name: "Release Date - Descending",
    value: "primary_release_date.desc",
  },
  {
    name: "Vote Average - Ascending",
    value: "vote_average.asc",
  },
  {
    name: "Vote Average - Descending",
    value: "vote_average.desc",
  },
];

const App = () => {
  const name = useUserStore((state) => state.name);
  const bio = useUserStore((state) => state.bio);
  const [sort, setSort] = useState("");
  const [year, setYear] = useState<string | number | undefined>();
  const [page, setPage] = useState(1);

  // use swr to cache data
  const url = `/discover/movie?page=${page}&sort_by=${sort}&primary_release_year=${year}`;
  const { data: movies, error } = useSWR(url, fetcher, {
    keepPreviousData: true, // cache data
  });
  // const { data: movies } = useFetch<any>(`/discover/movie?page=${page}`);

  const handleSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  const handleYear = async (event: ChangeEvent<HTMLInputElement>) => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        setYear(event.target.value);
        resolve();
      }, 500);
    });
  };

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
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select label="Sort By" value={sort} fullWidth onChange={handleSort}>
                {sortBy.map((sort, index) => (
                  <MenuItem key={index} value={sort.value}>
                    {sort.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <NumericFormat
                value={year}
                label="Release Year"
                customInput={TextField}
                fullWidth
                allowNegative={false}
                onChange={handleYear}
                slotProps={{
                  htmlInput: {
                    maxLength: 4,
                  },
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
        {error && error.info}
        {movies ? (
          <Grid container spacing={2}>
            {movies.results.map((movie: Movie) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.id}>
                <MovieCard
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
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
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
