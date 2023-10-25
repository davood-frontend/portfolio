import React from 'react';
import {  FaAngleLeft } from "react-icons/fa6";
import { Typography } from '@mui/material'

const DevInfo = ({ children }) => {
    return (
        <Typography sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <Typography variant='subtitle2' color='black'>
                {children}
            </Typography>
            <FaAngleLeft style={{ color: 'skyblue', marginLeft: '3px' }} />
        </Typography>
    );
};

export default DevInfo;