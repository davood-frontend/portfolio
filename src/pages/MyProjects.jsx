import React, { useState } from 'react'
import { Card, CardContent, Chip, Divider, Typography, CardActionArea, CardActions, CardMedia, Button, Dialog, DialogContent, DialogTitle, Avatar, DialogActions, Box } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { grey } from '@mui/material/colors'
import Grid from '@mui/material/Unstable_Grid2'
import EllipsisText from 'react-ellipsis-text'
import { data, mainData } from '../constants/myProjectsData'
import MyProjectsDialog from './components/MyProjectsDialog'
const MyProjects = ({ helmetTitle }) => {
    const [dialog, setDialog] = useState({
        open: false,
        data: { img: '', softColor: '', boldColor: '', title: '', text: '', href: '' },
    })

    const dialogHandler = (index) => {
        switch (index) {
            case 0:
                setDialog({ ...dialog, data: mainData.bank, open: true })
                break;
            case 1:
                setDialog({ ...dialog, data: mainData.crypto, open: true })
                break;
            case 2:
                setDialog({ ...dialog, data: mainData.personal, open: true })
                break;
            case 3:
                setDialog({ ...dialog, data: mainData.travelo, open: true })
                break;
        }
    }

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
            <MyProjectsDialog dialog={dialog} setDialog={setDialog} />
            <CardContent>
                <Divider sx={{ '&::before, &::after': { borderColor: grey[300] }, mt: 2 }}>
                    <Chip label={<Typography color='black'> نمونه کار های من </Typography>} />
                </Divider>

                <Grid container sx={{ width: 1, mb: 3, mt: 5 }}>
                    {data.map((item, index) => {
                        //editing the text so the component doesn't render <br /> as a part of the text
                        let editedText = item.text.replaceAll('<br />', String.fromCharCode(10))
                        return (
                            <Grid xs={12} sm={6} md={6} lg={4} sx={{ mb: 5, px: {xs:1, sm:3} }}>
                                <Card sx={{ backgroundColor: item.bg, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', border: `1px solid ${grey[300]}`, mx: 'auto' }}>

                                    <CardActionArea>
                                        <CardMedia
                                            component='img'
                                            image={item.img}
                                            height='250'
                                            width='200'
                                            alt='temperary logo'
                                        />
                                        <CardContent>
                                            <Typography variant='body1' textAlign='left' gutterBottom color={grey[900]}>
                                                {item.title}
                                            </Typography>
                                            <Typography textAlign='left' color={grey[800]} gutterBottom variant='body2' sx={{ direction: 'ltr' }}>
                                                <EllipsisText text={editedText} length={'120'} />
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>

                                        <Button sx={{ color: grey[800] }} onClick={() => dialogHandler(index)}>
                                            اطلاعات بیشتر
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}

                </Grid>
            </CardContent>
        </Card>
    )
}
export default MyProjects;