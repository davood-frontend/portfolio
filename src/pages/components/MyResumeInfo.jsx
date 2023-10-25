import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab';
import Grid from '@mui/material/Unstable_Grid2'
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import CostumDivider from '../../components/common/CostumDivider'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import { grey } from '@mui/material/colors';
// fix the colors
// fix the dates
const MyResumeInfo = () => {
    const theme = useTheme()
    const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>



            <Grid container>

                <Grid xs={12} md={6}>
                    <Grid xs={12}>
                        <CostumDivider bColor={grey[400]} cColor='info' text='مدارک من' />
                    </Grid>

                    <Timeline position={smallerThanMd && 'alternate'} sx={{ direction: 'ltr' }}>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='info' variant='outlined'>
                                    <FeedRoundedIcon color='info' />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant='caption' color='grey'>
                                    1398 - 14001
                                </Typography>
                                <Typography variant='body1' color='black'>
                                    جاوااسکریپت
                                </Typography>
                                <Typography variant='caption' color='black'>
                                    مدرس : استاد حسن خسروجردی
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='info' variant='outlined'>
                                    <FeedRoundedIcon color='info' />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant='caption' color='grey'>
                                    1398 - 14001
                                </Typography>
                                <Typography variant='body1' color='black'>
                                    ری اکت
                                </Typography>
                                <Typography variant='caption' color='black'>
                                    مدرس : استاد حسن خسروجردی
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='info' variant='outlined'>
                                    <FeedRoundedIcon color='info' />
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant='caption' color='grey'>
                                    1398 - 14001
                                </Typography>
                                <Typography variant='body1' color='black'>
                                    متخصص فرانت اند
                                </Typography>
                                <Typography variant='caption' color='black'>
                                    مدرس : استاد حسن خسروجردی
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>



                <Grid xs={12} md={6}>

                    <Grid xs={12}>
                    <CostumDivider bColor={grey[400]} cColor='info' text='تحصیلات من' />
                    </Grid>

                    <Timeline position={smallerThanMd && 'alternate'} sx={{
                        direction: 'ltr',
                    }}>
                        <TimelineItem >
                            <TimelineSeparator>
                                <TimelineDot color='warning' variant='outlined'>
                                    <SchoolRoundedIcon color='warning' />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant='caption' color='grey'>
                                    1398 - 1401
                                </Typography>
                                <Typography variant='body1' color='black'>
                                    دیپلم
                                </Typography>
                                <Typography variant='body2' color='black'>
                                    رشته کامپیوتر گرایش تولید محتوا
                                </Typography>
                                <Typography variant='body2' color='black'>
                                    کار و دانش امام مجتبی
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='warning' variant='outlined'>
                                    <SchoolRoundedIcon color='warning' />
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant='caption' color='grey'>
                                    1401
                                    -
                                    تاکنون
                                </Typography>
                                <Typography variant='body1' color='black'>
                                    کارشناسی
                                </Typography>
                                <Typography variant='body2' color='black'>
                                    رشته کامپیوتر گرایش نرم افزار
                                </Typography>
                                <Typography variant='body2' color='black'>
                                    دانشگاه غیر انتفاعی ایوانکی
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>

            </Grid>
        </>

    );
};

export default MyResumeInfo;