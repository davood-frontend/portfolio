import React from 'react';
import { DarkTheme } from './theme'
import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react'
import { HelmetProvider } from 'react-helmet-async'
import { prefixer } from 'stylis';
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import Grid from '@mui/material/Unstable_Grid2'
const cacheRTL = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
})
const Mainlayout = ({ children }) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={DarkTheme}>
                <HelmetProvider>
                    <Grid container sx={{ height: '100vh' }}>
                        {children}
                    </Grid>

                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default Mainlayout;