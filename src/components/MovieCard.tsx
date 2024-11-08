"use client";
import { Movie } from "@/types/Movie";
import { IMAGE_URL } from "@/utils/constant";
import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { memo } from "react";

const MovieCard = memo(function MovieCard({ id, title, poster_path, vote_average }: Movie) {
  const router = useRouter();

  const handleDetails = () => {
    console.log("laskdjalsdj");
    router.push(`/app/movies/${id}`);
  };

  return (
    <Box
      onClick={handleDetails}
      sx={{
        cursor: "pointer",
        transition: "0.1s",
        "&:hover": {
          scale: 1.05,
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
        <Chip
          color={vote_average >= 7 ? "success" : vote_average >= 5 ? "warning" : "error"}
          label={vote_average}
        />
      </Box>
    </Box>
  );
});
export default MovieCard;
