import { Tooltip, Box, IconButton } from '@mui/material';
import React from 'react';
import { information } from '../../constants/socialAccInformation'
import {useTheme} from '@mui/material/styles';
const SocialAccounts = () => {
    const theme = useTheme()
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 6 }}>
            {information.map((item, index) => {
                return <a key={index} href={item.href} target='_blank'>
                    <Tooltip title={item.title} arrow placement='bottom' sx={{
                        ':hover': {
                            color: theme.palette.mode === 'dark' && item.color
                        }
                    }}>
                        <IconButton>
                            {item.icon}
                        </IconButton>
                    </Tooltip>
                </a>
            })}
        </Box>
    );
};

export default SocialAccounts;