import React from 'react';
import { FaHeart, FaCopyright } from "react-icons/fa6";
import { Typography, Box} from '@mui/material'

const SidebarFooter = () => {
    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
        }}>
            <Typography color='text.primary' sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='subtitle2' sx={{ marginRight: 1 }}>طراحی شده با</Typography> <FaHeart color='tomato' />
            </Typography>
            <Typography color='text.primary' sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Typography variant='caption' sx={{ marginRight: 1 }}> کپی رایت 1402 </Typography> <FaCopyright />
            </Typography>

        </Box>

    );
};

export default SidebarFooter;