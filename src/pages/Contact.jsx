import React, { useEffect } from 'react';
import { Card, CardContent, Divider, Chip, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Unstable_Grid2'
import ContactForm from './components/ContactForm'

const Contact = ({ helmetTitle }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
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
                    <Chip label={<Typography variant='body1' color='black' textAlign='center'> ارتباط با من </Typography>} />
                </Divider>

                <Grid container sx={{ justifyContent: 'center', mt: 5, px: { sm: 0, md: 5 } }}>
                    <Grid xs={12} sx={{ direction: 'ltr' }}>
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