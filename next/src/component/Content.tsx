"use client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";

const Content = ({ children } : { children : React.ReactNode}) => {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true)
    }, [])
 
    return (
    <> {isClient ?         
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider> : 'Prerendered'}
    </>)
}

export default Content;

const theme = createTheme({
  palette: {
    background: {
      default: '#ababa0',
      paper: '#fff',
    },
    text: {
      primary: '#111',
      secondary: '#666',
    },
  },
});