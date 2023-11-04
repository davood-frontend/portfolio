import React from 'react';
import { Fab, Box } from '@mui/material'
import { red } from '@mui/material/colors'
import { FaBars } from 'react-icons/fa6'
import { useContext } from 'react';
import MainContext from '../../context'
const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(MainContext)
    return (

        <Fab
            sx={{
                m: 2,
                display: {
                    xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'
                },
                position: 'fixed',
                top: '0px',
                alignItems:'center'
            }}
            color='primary'
            size='small'
            onClick={() => setDrawerOpen(true)}
        >
            <FaBars />
        </Fab>
    );
};

export default DrawerActionButton;