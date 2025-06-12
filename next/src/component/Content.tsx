"use client";

import { createTheme, ThemeProvider } from "@mui/material";

const Content = ({ children } : { children : React.ReactNode}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default Content;

const theme = createTheme({
  palette: {
    background: {
      default: '#f0f0f0',
      paper: '#fff',
    },
    text: {
      primary: '#111',
      secondary: '#666',
    },
  },
});