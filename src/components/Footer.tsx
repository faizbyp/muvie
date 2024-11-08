import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        height: "200px",
        bgcolor: "primary.main",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
        borderRadius: "36px",
      }}
    >
      <Typography>created by</Typography>
      <Link href="https://faizbyp.vercel.app/" target="_blank" style={{ color: "white" }}>
        faizbyp
      </Link>
    </Box>
  );
};
export default Footer;
