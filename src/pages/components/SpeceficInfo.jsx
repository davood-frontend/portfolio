import React from 'react';
import DevInfo from '.././components/DevInfo'
import blackWhiteAvt from '../../assets/blackWhiteAvt.jpg'
import { Avatar } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import Grid from '@mui/material/Unstable_Grid2'
import CostumDivider from '../../components/common/CostumDivider'

const SpeceficInfo = () => {
    return (
        <Grid container sx={{
            m: 3
        }}>

            <Grid
                xs={12} sm={12} md={8} lg={8} xl={8}
            >
                <CostumDivider align='right' bColor='primary.main' cColor='primary' icon={<CodeIcon />} text='توسعه دهنده فرانت اند' />
                <DevInfo>
                    نام و نام خوانوادگی : داود رضایی
                </DevInfo>
                <DevInfo>
                    سن : 19
                </DevInfo>
                <DevInfo>
                    رشته تحصیلی : مهندسی کامپیوتر
                </DevInfo>
                <DevInfo>
                    شهر : پاکدشت
                </DevInfo>
                <DevInfo>
                    davood.frontend@gmail.com : آدرس ایمیل
                </DevInfo>
            </Grid> 
            <Grid
                xs={0} sm={0} md={4} lg={4} xl={4}
            >
                <Avatar
                    src={blackWhiteAvt}
                    variant='rounded'
                    sx={{
                        height: 250,
                        width: 250,
                        display: {
                            xl: 'block',
                            lg: 'block',
                            md: 'block',
                            sm: 'none',
                            xs: 'none',
                        },
                        margin: '0 auto'
                    }}
                >
                    DR
                </Avatar>
            </Grid>

        </Grid>
    );
};

export default SpeceficInfo;