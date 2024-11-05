import { Box, Typography } from "@mui/material";

export default function Home() {
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
    </>
  );
}
