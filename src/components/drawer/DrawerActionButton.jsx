import React from 'react';
import { Fab, Box } from '@mui/material'
import { red } from '@mui/material/colors'
import { FaBars } from 'react-icons/fa6'
import { useContext } from 'react';
import MainContext from '../../context'
const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(MainContext)
    return (
        <Box
            sx={{
                position: 'absolute',
                display: {
                    xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'
                }
            }}
        >
            <Fab
                sx={{ m: 2}}
                color='primary'
                size='small'
                onClick={() => setDrawerOpen(true)}
            >
                <FaBars />
            </Fab>
        </Box>
    );
};

export default DrawerActionButton;