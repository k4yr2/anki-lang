"use client";

import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "@/data/store/app";
import { mainTheme } from "@fuuwille/mui-joy";

const Content = ({ children } : { children : React.ReactNode}) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
 
    if(!isClient) return null;

    return (
      <Provider store={store}>
        <CssVarsProvider theme={mainTheme}>
          <CssBaseline />
          {children}
        </CssVarsProvider>
      </Provider>
    );
}

export default Content;