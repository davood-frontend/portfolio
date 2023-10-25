import React, { useState, useEffect } from 'react';
import { Typography, Box, Fade } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import {softSkillsData} from '../../constants/softSkillsData'
const SoftSkills = () => {
    const [loading, setLoading] = useState(false)

    const data = softSkillsData()
    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, [])

 
    return (

        <Fade in={loading} timeout={1600}>

            <Grid container sx={{ justifyContent: 'space-around', my: 3 }}>
                {
                    data.map((item, index) => (
                        <Grid xs={11} sm={5} md={5.5} lg={3.5} key={index} sx={item.style}>
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                                    {item.icon}
                                </Box>
                                <Box sx={{ mb: 1.5 }}>
                                    <Typography color="black">
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Fade>
    );
};

export default SoftSkills;