import React from 'react';
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { grey } from '@mui/material/colors';
const SkillTemplate = ({ icon, title }) => {
    return (
        <Grid xs={11} sm={6} md={6} lg={4} sx={{ px: { xs: 1, sm: 1.5, md: 2.3 } }}>
            <Box sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', border: 1, borderColor: grey[200], borderRadius: 2, transition: '0.3s', ":hover": { boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;' }, mt: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                    {icon}
                </Box>
                <Box sx={{ mb: 1.5 }}>
                    <Typography color="black">
                        {title}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default SkillTemplate;