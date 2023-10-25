import React from 'react';
import { Card, CardContent, Box, Avatar, Typography, Divider, Chip, Button } from '@mui/material'
import { Helmet } from 'react-helmet-async';
import logo from '../assets/logo.png'
import { grey } from '@mui/material/colors';
import Slider from 'react-slick'

const MyArticles = ({ helmetTitle }) => {
    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        cssEase: 'linear',
        rtl : true

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
            <CardContent>

                <Divider sx={{ '&::before, &::after': { borderColor: grey[300] }, mt: 2 }}>
                    <Chip label={<Typography color='black'> مقاله های من </Typography>} />
                </Divider>

                <Box component='div' sx={{ mt: 10}}>
                    <Slider {...options}>
                        <Box component='div'  sx={{display:'flex', justifyContent:'center', py: 1.5}}>
                            <Avatar src={logo}
                                sx={{ height: 100, width: 100, borderRadius: 2, m: '0 auto' }}
                            />
                            <Typography variant='body1' color='black' sx={{ mt: 2 }}>
                                چقدر طول میکشد تا از برنامه نویسی به درآمد برسیم؟
                            </Typography>
                            <Typography variant='body2' color={grey[600]} sx={{ mb: 2 }}>
                                داود رضایی
                            </Typography>
                            <Card sx={{ backgroundColor: '#A1CCD1', width: {sx : 8/10, md : 3 / 4, lg : 2/4}, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', m: '0 auto' }} >
                                <CardContent >
                                    <Typography sx={{ p: 2, color: grey[800] }}>
                                        در این مقاله راجب اینکه واقعا چقدر طول میکشه برنامه نویس بشیم بحث میکنیم اول از همه باید به این نکته توجه کنید که شما نمیتونید بدون تلاش چیزی رو بدست بیارید پس اولین نکته ای که باید بهش توجه کنید تلاش کردنه نکته دوم اینه که ما نمیتونیم به همه بفهمونیم چقدر ما دوستشون داریم چون شاید خیلی احساساتی بشن و نتونیم کار رو تموم کنیم و پس همیشه این نکته رو بخاطر میسپاریم که ما میتونیم این کار رو تموم کنیم
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Button variant='contained' sx={{ mt: 3, color: grey[800], backgroundColor: '#E9B384', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', ':hover': { backgroundColor: '#E9B384', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' } }}>
                                مشاهده مقاله در وبسایت ویرگول
                            </Button>
                        </Box>

                        <Box component='div'  sx={{display:'flex', justifyContent:'center'}}>
                            <Avatar src={logo}
                                sx={{ height: 100, width: 100, borderRadius: 2, m: '0 auto' }}
                            />
                            <Typography variant='body1' color='black' sx={{ mt: 2 }}>
                                چقدر طول میکشد تا از برنامه نویسی به درآمد برسیم؟
                            </Typography>
                            <Typography variant='body2' color={grey[600]} sx={{ mb: 2 }}>
                                داود رضایی
                            </Typography>
                            <Card sx={{ backgroundColor: '#A1CCD1', width: 1 / 2, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', m: '0 auto' }} >
                                <CardContent >
                                    <Typography sx={{ p: 2, color: grey[800] }}>
                                        در این مقاله راجب اینکه واقعا چقدر طول میکشه برنامه نویس بشیم بحث میکنیم اول از همه باید به این نکته توجه کنید که شما نمیتونید بدون تلاش چیزی رو بدست بیارید پس اولین نکته ای که باید بهش توجه کنید تلاش کردنه نکته دوم اینه که ما نمیتونیم به همه بفهمونیم چقدر ما دوستشون داریم چون شاید خیلی احساساتی بشن و نتونیم کار رو تموم کنیم و پس همیشه این نکته رو بخاطر میسپاریم که ما میتونیم این کار رو تموم کنیم
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Button variant='contained' sx={{ mt: 3, color: grey[800], backgroundColor: '#E9B384', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', ':hover': { backgroundColor: '#E9B384', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' } }}>
                                مشاهده مقاله در وبسایت ویرگول
                            </Button>
                        </Box>


                        <Box component='div'  sx={{display:'flex', justifyContent:'center'}}>
                            <Avatar src={logo}
                                sx={{ height: 100, width: 100, borderRadius: 2, m: '0 auto' }}
                            />
                            <Typography variant='body1' color='black' sx={{ mt: 2 }}>
                                چقدر طول میکشد تا از برنامه نویسی به درآمد برسیم؟
                            </Typography>
                            <Typography variant='body2' color={grey[600]} sx={{ mb: 2 }}>
                                داود رضایی
                            </Typography>
                            <Card sx={{ backgroundColor: '#A1CCD1', width: 1 / 2, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', m: '0 auto' }} >
                                <CardContent >
                                    <Typography sx={{ p: 2, color: grey[800] }}>
                                        در این مقاله راجب اینکه واقعا چقدر طول میکشه برنامه نویس بشیم بحث میکنیم اول از همه باید به این نکته توجه کنید که شما نمیتونید بدون تلاش چیزی رو بدست بیارید پس اولین نکته ای که باید بهش توجه کنید تلاش کردنه نکته دوم اینه که ما نمیتونیم به همه بفهمونیم چقدر ما دوستشون داریم چون شاید خیلی احساساتی بشن و نتونیم کار رو تموم کنیم و پس همیشه این نکته رو بخاطر میسپاریم که ما میتونیم این کار رو تموم کنیم
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Button variant='contained' sx={{ mt: 3, color: grey[800], backgroundColor: '#E9B384', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', ':hover': { backgroundColor: '#E9B384', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' } }}>
                                مشاهده مقاله در وبسایت ویرگول
                            </Button>
                        </Box>

                        <Box component='div'  sx={{display:'flex', justifyContent:'center'}}>
                            <Avatar src={logo}
                                sx={{ height: 100, width: 100, borderRadius: 2, m: '0 auto' }}
                            />
                            <Typography variant='body1' color='black' sx={{ mt: 2 }}>
                                چقدر طول میکشد تا از برنامه نویسی به درآمد برسیم؟
                            </Typography>
                            <Typography variant='body2' color={grey[600]} sx={{ mb: 2 }}>
                                داود رضایی
                            </Typography>
                            <Card sx={{ backgroundColor: '#A1CCD1', width: 1 / 2, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', m: '0 auto' }} >
                                <CardContent >
                                    <Typography sx={{ p: 2, color: grey[800] }}>
                                        در این مقاله راجب اینکه واقعا چقدر طول میکشه برنامه نویس بشیم بحث میکنیم اول از همه باید به این نکته توجه کنید که شما نمیتونید بدون تلاش چیزی رو بدست بیارید پس اولین نکته ای که باید بهش توجه کنید تلاش کردنه نکته دوم اینه که ما نمیتونیم به همه بفهمونیم چقدر ما دوستشون داریم چون شاید خیلی احساساتی بشن و نتونیم کار رو تموم کنیم و پس همیشه این نکته رو بخاطر میسپاریم که ما میتونیم این کار رو تموم کنیم
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Button variant='contained' sx={{ mt: 3, color: grey[800], backgroundColor: '#E9B384', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', ':hover': { backgroundColor: '#E9B384', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' } }}>
                                مشاهده مقاله در وبسایت ویرگول
                            </Button>
                        </Box>

                        <Box component='div'  sx={{display:'flex', justifyContent:'center'}}>
                            <Avatar src={logo}
                                sx={{ height: 100, width: 100, borderRadius: 2, m: '0 auto' }}
                            />
                            <Typography variant='body1' color='black' sx={{ mt: 2 }}>
                                چقدر طول میکشد تا از برنامه نویسی به درآمد برسیم؟
                            </Typography>
                            <Typography variant='body2' color={grey[600]} sx={{ mb: 2 }}>
                                داود رضایی
                            </Typography>
                            <Card sx={{ backgroundColor: '#A1CCD1', width: 1 / 2, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', m: '0 auto' }} >
                                <CardContent >
                                    <Typography sx={{ p: 2, color: grey[800] }}>
                                        در این مقاله راجب اینکه واقعا چقدر طول میکشه برنامه نویس بشیم بحث میکنیم اول از همه باید به این نکته توجه کنید که شما نمیتونید بدون تلاش چیزی رو بدست بیارید پس اولین نکته ای که باید بهش توجه کنید تلاش کردنه نکته دوم اینه که ما نمیتونیم به همه بفهمونیم چقدر ما دوستشون داریم چون شاید خیلی احساساتی بشن و نتونیم کار رو تموم کنیم و پس همیشه این نکته رو بخاطر میسپاریم که ما میتونیم این کار رو تموم کنیم
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Button variant='contained' sx={{ mt: 3, color: grey[800], backgroundColor: '#E9B384', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', ':hover': { backgroundColor: '#E9B384', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' } }}>
                                مشاهده مقاله در وبسایت ویرگول
                            </Button>
                        </Box>

                        <Box component='div'  sx={{display:'flex', justifyContent:'center'}}>
                            <Avatar src={logo}
                                sx={{ height: 100, width: 100, borderRadius: 2, m: '0 auto' }}
                            />
                            <Typography variant='body1' color='black' sx={{ mt: 2 }}>
                                چقدر طول میکشد تا از برنامه نویسی به درآمد برسیم؟
                            </Typography>
                            <Typography variant='body2' color={grey[600]} sx={{ mb: 2 }}>
                                داود رضایی
                            </Typography>
                            <Card sx={{ backgroundColor: '#A1CCD1', width: 1 / 2, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', m: '0 auto' }} >
                                <CardContent >
                                    <Typography sx={{ p: 2, color: grey[800] }}>
                                        در این مقاله راجب اینکه واقعا چقدر طول میکشه برنامه نویس بشیم بحث میکنیم اول از همه باید به این نکته توجه کنید که شما نمیتونید بدون تلاش چیزی رو بدست بیارید پس اولین نکته ای که باید بهش توجه کنید تلاش کردنه نکته دوم اینه که ما نمیتونیم به همه بفهمونیم چقدر ما دوستشون داریم چون شاید خیلی احساساتی بشن و نتونیم کار رو تموم کنیم و پس همیشه این نکته رو بخاطر میسپاریم که ما میتونیم این کار رو تموم کنیم
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Button variant='contained' sx={{ mt: 3, color: grey[800], backgroundColor: '#E9B384', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', ':hover': { backgroundColor: '#E9B384', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' } }}>
                                مشاهده مقاله در وبسایت ویرگول
                            </Button>
                        </Box>

                    </Slider>
                </Box>
            </CardContent>
        </Card>
    );
};

export default MyArticles;