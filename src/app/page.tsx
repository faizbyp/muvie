import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/Movie";
import { TMDB } from "@/utils/api";
import { Box, Typography, Grid2 as Grid, Container, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let movies = [];
  try {
    const get = await TMDB.get("/discover/movie");
    movies = get.data.results;
  } catch (error: any) {
    console.error(error.message);
  }

  return (
    <>
      <Box component="nav" sx={{ display: "flex", justifyContent: "space-between", mx: 4, my: 2 }}>
        <Typography fontWeight="bold" color="primary">
          Muvie
        </Typography>
        <Link href="/app" passHref>
          <Button variant="contained">Get Started</Button>
        </Link>
      </Box>
      <Box
        component="header"
        sx={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="display1" color="primary">
          Muvie
        </Typography>
        <Typography color="text.secondary">Save your fav movies, right in your browser</Typography>
      </Box>

      <Container maxWidth="md" component="section">
        <Typography variant="h1" align="center" color="primary" mb={4}>
          Popular Movies
        </Typography>
        <Grid container spacing={4}>
          {movies.slice(0, 8).map((movie: Movie) => (
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "silver",
            height: "256px",
            borderRadius: "36px",
            my: 12,
          }}
        >
          <Typography variant="display2">Muvie</Typography>
          <Link href="/app" passHref>
            <Button variant="contained">Get Started</Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}
