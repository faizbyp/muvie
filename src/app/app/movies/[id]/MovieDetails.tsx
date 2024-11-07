"use client";
import MovieAction from "@/components/MovieAction";
import { Movie } from "@/types/Movie";
import TMDB from "@/utils/api";
import { IMAGE_URL } from "@/utils/constant";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid2 as Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const MovieDetails = ({
  title,
  poster_path,
  tagline,
  overview,
  homepage,
  popularity,
  vote_average,
  id,
}: Movie) => {
  return (
    <Container maxWidth="md">
      <Box component="nav" sx={{ display: "flex", gap: 8, my: 2 }}>
        <Link href="/app">
          <Button variant="contained">Home</Button>
        </Link>
        {/* <Link href="/app/movies">
          <Button variant="contained">Muvies</Button>
        </Link> */}
        <Link href="/app/profile">
          <Button variant="contained">Profile</Button>
        </Link>
      </Box>
      <Box sx={{ my: 8 }}>
        <Typography variant="display2" color="primary">
          {title}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Image
            src={IMAGE_URL + "w500" + poster_path}
            alt={`${title} poster`}
            width={300}
            height={300}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Typography variant="h1" color="primary">
            {tagline}
          </Typography>
          <Typography>{overview}</Typography>
          <Box sx={{ my: 2 }}>
            <MuiLink href={homepage} target="_blank">
              {homepage}
            </MuiLink>
          </Box>
          <Box sx={{ display: "flex", gap: 8 }}>
            <Box>
              <Typography fontWeight="bold">Popularity</Typography>
              <Chip color="primary" label={popularity} />
            </Box>
            <Box>
              <Typography fontWeight="bold">Vote Avg.</Typography>
              <Chip color="primary" label={vote_average} />
            </Box>
            <MovieAction
              id={id}
              title={title}
              poster_path={poster_path}
              vote_average={vote_average}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default MovieDetails;
