import { Movie } from "@/types/Movie";
import { IMAGE_URL } from "@/utils/constant";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { memo } from "react";

const MovieCard = memo(function MovieCard({ title, poster_path, vote_average }: Movie) {
  return (
    <Box
      sx={{
        transition: "0.1s",
        "&:hover": {
          scale: 1.06,
        },
      }}
    >
      <Image
        src={IMAGE_URL + "w500" + poster_path}
        alt={`${title} poster`}
        width={300}
        height={300}
        style={{ width: "100%", height: "auto" }}
      />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mt: 1 }}
      >
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h3" color="success">
          {vote_average}
        </Typography>
      </Box>
    </Box>
  );
});
export default MovieCard;
