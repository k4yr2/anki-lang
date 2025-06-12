"use client";

import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { useState, useEffect } from "react";
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: '#ececec',        // Açık ama göz almaz
          surface: '#e0e0e0',     // Hafif kontrastlı yüzey
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: '#1c1c1f',        // Göz yormayan koyu gri
          surface: '#2a2a2e',     // Hafif kontrast yüzey
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