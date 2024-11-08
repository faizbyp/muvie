import Footer from "@/components/Footer";
import { Container, Box, Button } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Container maxWidth="md" component="main">
        <Box component="nav" sx={{ display: "flex", gap: 4, my: 2 }}>
          <Link href="/app">
            <Button variant="outlined">Home</Button>
          </Link>
          <Link href="/app/profile">
            <Button variant="outlined">Profile</Button>
          </Link>
        </Box>
        {children}
      </Container>
      <Footer />
    </>
  );
}
