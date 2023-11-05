import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { Typography, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const DevInfo = ({ children }) => {
    return (
        <Grid container sx={{ mt: 2 }}>
            <Grid xs={11} md={11.5}>
                <Typography variant='subtitle2' color='black' >
                    {children}
                </Typography>

            </Grid>

            <Grid xs={1} md={0.5} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <FaAngleLeft style={{ color: 'skyblue', marginLeft: '3px'}} />
            </Grid>
        </Grid>
    );
};

export default DevInfo;