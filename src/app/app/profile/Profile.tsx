"use client";
import MovieCard from "@/components/MovieCard";
import useUserStore from "@/hooks/useUserStore";
import { Movie } from "@/types/Movie";
import { Box, Button, Container, Typography, Grid2 as Grid, TextField } from "@mui/material";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const Profile = () => {
  const name = useUserStore((state) => state.name);
  const bio = useUserStore((state) => state.bio);
  const savedMovies = useUserStore((state) => state.savedMovies);
  const setName = useUserStore((state) => state.setName);
  const setBio = useUserStore((state) => state.setBio);
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeName = async (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeBio = async (event: ChangeEvent<HTMLInputElement>) => {
    setBio(event.target.value);
  };

  return (
    <>
      <Box sx={{ my: 8 }}>
        <Typography variant="display2" color="primary">
          Profile
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid size={{ xs: 12, sm: 8, md: 6 }} component="section">
          <Typography variant="h1" color="primary">
            Edit Profile
          </Typography>
          <TextField
            label="Name"
            onChange={handleChangeName}
            value={name}
            fullWidth
            disabled={!isEdit}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Bio"
            onChange={handleChangeBio}
            value={bio}
            fullWidth
            disabled={!isEdit}
            sx={{ mb: 2 }}
            multiline
            rows={5}
          />
          <Box textAlign="right">
            <Button variant={!isEdit ? "outlined" : "contained"} onClick={() => setIsEdit(!isEdit)}>
              {!isEdit ? "Edit" : "Done"}
            </Button>
          </Box>
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
    </>
  );
};
export default Profile;
