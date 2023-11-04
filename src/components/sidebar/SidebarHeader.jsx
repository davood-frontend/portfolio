import React from 'react';
import { Typography,Avatar } from '@mui/material'
import coloredAvt from '../../assets/coloredAvt.jpg'

const SidebarHeader = () => {
    return (
        <>
            <Avatar variant='rounded' src={coloredAvt} sx={{ width: '100px', height: '100px', mx: 'auto', my:1 , display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }} />

            <Typography variant='h6' color='text.primary' gutterBottom>
                داود رضایی
            </Typography>
            <Typography variant='caption' color='text.primary'>
                توسعه دهنده فرانت اند
            </Typography>

        </>
    );
};

export default SidebarHeader;