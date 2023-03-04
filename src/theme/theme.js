import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#0087FF ",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          padding: "0.3rem 1rem",
        },
      },
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
    },
  },
});
