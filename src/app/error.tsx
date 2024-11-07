"use client";

import { Button, Container, Typography } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container maxWidth="sm" sx={{ mt: "128px" }}>
      <Typography variant="display1" color="error">
        Oops!
      </Typography>
      <Typography variant="h2">Something happened</Typography>
      <Typography>{error.message}</Typography>
      <Button variant="contained" onClick={() => reset()} sx={{ mt: 2 }}>
        Retry
      </Button>
    </Container>
  );
}
