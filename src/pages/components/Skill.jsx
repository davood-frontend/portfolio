import React from 'react';
import { Typography, Box, LinearProgress, Chip } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
const Skill = ({ color, icon, name, value }) => {
    return (
        <Grid xs={12} sm={6} md={6} lg={4} xl={4} sx={{ px: {xs : 1, sm : 3}, mt:7 }}>
            <Box textAlign='left'>
                <Chip icon={icon} label={name} sx={{ p: 1, background: color }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ minWidth: 35 }}>
                    <Typography color='black'>
                        {value}%
                    </Typography>
                </Box>

                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant='determinate' value={value} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: color }, borderRadius: 2 }} />
                </Box>
            </Box>

        </Grid>
    );
};

export default Skill;