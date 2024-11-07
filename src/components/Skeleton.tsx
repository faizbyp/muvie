import { Box, Skeleton, Typography } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Skeleton variant="rounded" width="100%" height={256} />
      <Skeleton variant="rounded" width="100%" height={256} />
      <Skeleton variant="rounded" width="100%" height={256} />
    </Box>
  );
};
