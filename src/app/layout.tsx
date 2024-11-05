import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muvie",
  description: "Movie list application that allow user to modify their bookmark or favorite movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
