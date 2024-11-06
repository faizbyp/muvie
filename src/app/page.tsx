import { Movie } from "@/types/Movie";
import API from "@/utils/api";
import { Box, Typography } from "@mui/material";

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
        }}
      >
        <Typography variant="display1" color="primary">
          Muvie
        </Typography>
        <Typography color="text.secondary">Save your fav movies, right in your browser</Typography>
      </Box>
      {movies.slice(0, 6).map((movie: Movie) => (
        <Typography key={movie.id}>{movie.original_title}</Typography>
      ))}
    </>
  );
}
