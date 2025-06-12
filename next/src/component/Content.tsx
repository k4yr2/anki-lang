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
          popup: '#f5f5f5',       // Dialog ve popup'lar için
          level1: '#d6d6d6',      // 1. seviye yüzey
          level2: '#cccccc',      // 2. seviye yüzey
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: '#1c1c1f',        // Göz yormayan koyu gri
          surface: '#2a2a2e',     // Hafif kontrast yüzey
          popup: '#2f2f34',       // Açılır içerikler için
          level1: '#3b3b40',      // 1. seviye yüzey
          level2: '#49494f',      // 2. seviye yüzey
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