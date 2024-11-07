import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/Movie";
import API from "@/utils/api";
import { API_URL, IMAGE_URL } from "@/utils/constant";
import { Box, Typography, Grid2 as Grid, Container, Button } from "@mui/material";
import Image from "next/image";

export default async function Home() {
  let movies = [];
  try {
    const get = await API.get("/discover/movie");
    movies = get.data.results;
  } catch (error: any) {
    console.error(error);
  }

  return (
    <>
      <Box component="nav" sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}>
        <Typography>Muvie</Typography>
        <Typography>Profile</Typography>
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
          bgcolor: "",
        }}
      >
        <Typography variant="display1" color="primary">
          Muvie
        </Typography>
        <Typography color="text.secondary">Save your fav movies, right in your browser</Typography>
      </Box>

      <Container maxWidth="md" component="section">
        <Typography variant="h1" align="center" color="primary" mb={4}>
          Popular Muvies
        </Typography>
        <Grid container spacing={4}>
          {movies.slice(0, 8).map((movie: Movie) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.id}>
              <MovieCard
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" mt={4}>
          <Button variant="contained">See More</Button>
        </Box>
      </Container>
    </>
  );
}
