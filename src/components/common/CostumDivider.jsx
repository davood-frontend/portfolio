import React from 'react';
import { Divider, Chip, Typography } from '@mui/material';
const CostumDivider = ({ bColor, cColor, icon, align, text, mt, mb }) => {
    return (
        <Divider textAlign={align} sx={{ "&::before, &::after": { borderColor:  bColor  }, mt: mt || 0, mb: mb || 0}}>
            <Chip icon={icon} color={cColor} label={<Typography variant='body1' color='black' textAlign='center'> {text} </Typography>} sx={{ p: {xs : 2, sm : 3} ,my: 3}} />
        </Divider>
    );
};

export default CostumDivider;