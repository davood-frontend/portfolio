import React from 'react';
import { Box } from '@mui/material'
const Page = ({ children, pageNumber, index, ...others }) => {
    return (
        <div
            role='tabpanel'
            hidden={pageNumber !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`}
            {...others}
        >
            {
                pageNumber === index && (
                    <Box>
                        {children}
                    </Box>
                )
            }
        </div>
    );
};

export default Page;