import React from 'react';
import { grey } from '@mui/material/colors'
import { Box, Divider } from '@mui/material'
import { SocialAccounts } from '.'
import SidebarFooter from './SidebarFooter';
import  SidebarHeader from './SidebarHeader';
import SidebarTabs from './SidebarTabs';
const SidebarContent = () => {

    return (
        <>
            <Box sx={{ justifyContent: 'center', textAlign: 'center', mt: 2 }}>

                <SidebarHeader />





                <Divider variant='middle' color={grey[900]} sx={{my:2}} />

                <SidebarTabs />

                <Divider variant='middle' color={grey[900]} sx={{ mt: 2 }} />

                <SidebarFooter />

                <SocialAccounts />
              

            </Box>
        </>
    );
};

export default SidebarContent;