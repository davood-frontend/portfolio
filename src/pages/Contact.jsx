import React from 'react';
import { Card, CardContent, Divider, Chip, Typography } from '@mui/material';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { grey } from '@mui/material/colors';
import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Unstable_Grid2'

import ContactForm from './components/ContactForm'
const Contact = ({ helmetTitle }) => {

    return (
        <Card sx={{
            height: '100vh',
            backgroundColor: 'whitesmoke',
            overflowY: 'scroll'
        }}>
            <Helmet>
                <title>
                    {helmetTitle}
                </title>
            </Helmet>
                        <CardContent>
                            <Divider textAlign='center' sx={{ "&::before, &::after": { borderColor: grey[300] }, mt: 2 }}>
                                <Chip icon={<FaWandMagicSparkles color={grey[900]} />} label={<Typography variant='body1' color='black' textAlign='center'> ارتباط با من </Typography>} sx={{ p: 3 }} />
                            </Divider>

                            <Grid container sx={{ justifyContent: 'center', mt: 5 }}>
                                <Grid xs={10} sx={{ direction: 'ltr' }}>
                                    <Card sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <ContactForm />
                                    </Card>
                                </Grid>
                            </Grid>

                        </CardContent>
        </Card >
    );
};

export default Contact;