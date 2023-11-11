import React, { useEffect } from 'react';
import { Card, CardContent } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import CostumDivider from '../components/common/CostumDivider';
import { grey } from '@mui/material/colors';
import MyResumeInfo from './components/MyResumeInfo';
import SoftSkills from './components/SoftSkills';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import HardSkills from './components/HardSkills';
const MyResume = ({ helmetTitle }) => {

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


                <CostumDivider align='right' bColor={grey[300]} icon={<DesktopWindowsIcon sx={{ fill: grey[500] }} />} text='مهارت های سخت من' mt={2} />

                <HardSkills />


                <CostumDivider align='right' bColor={grey[300]} icon={<PsychologyIcon sx={{ fill: grey[500] }} />} text='مهارت های نرم من ' mt={5} mb={5} />


                <SoftSkills />

                <MyResumeInfo />

            </CardContent>

        </Card >
    );
};

export default MyResume;