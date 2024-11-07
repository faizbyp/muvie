"use client";
import MovieCard from "@/components/MovieCard";
import useUserStore from "@/hooks/useUserStore";
import { Movie } from "@/types/Movie";
import { Box, Button, Container, Typography, Grid2 as Grid } from "@mui/material";
import Link from "next/link";

const Profile = () => {
  const name = useUserStore((state) => state.name);
  const bio = useUserStore((state) => state.bio);
  const savedMovies = useUserStore((state) => state.savedMovies);

  return (
    <Container maxWidth="md">
      <Box component="nav" sx={{ display: "flex", gap: 8, my: 2 }}>
        <Link href="/app">
          <Button variant="contained">Home</Button>
        </Link>
        <Link href="/app/profile">
          <Button variant="contained">Profile</Button>
        </Link>
      </Box>

      <Box sx={{ my: 8 }}>
        <Typography variant="display2" color="primary">
          Profile
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
      </Grid>

      <Typography variant="h1">My Movies</Typography>
      <Grid container spacing={2}>
        {savedMovies.map((movie: Movie) => (
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
    </Container>
  );
};
export default Profile;
