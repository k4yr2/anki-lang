"use client";

import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { useState, useEffect } from "react";
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
    colorSchemes: {
    light: {
      palette: {
        background: {
          body: "#99A9A9",
          surface: "#8787aa",
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: "#000000",    // örnek koyu mod rengi
          surface: "#121212", // örnek koyu mod rengi
        },
      },
    },
  }
});

const Content = ({ children } : { children : React.ReactNode}) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
 
    if(!isClient) return null;

    return (
      <>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          {children}
        </CssVarsProvider>
      </>
    );
}

export default Content;