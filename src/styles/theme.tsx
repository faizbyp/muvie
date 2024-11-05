"use client";

import { createTheme } from "@mui/material";
import "./globals.css";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    display1: React.CSSProperties;
    display2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0297b5",
    },
  },
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    display1: {
      fontSize: "6rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    display2: {
      fontSize: "4rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          display1: "h1",
          display2: "h2",
        },
      },
    },
  },
});

export default theme;
