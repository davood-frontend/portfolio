import React from 'react';
import DevInfo from '.././components/DevInfo'
import blackWhiteAvt from '../../assets/blackWhiteAvt.jpg'
import { Avatar ,Box} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import Grid from '@mui/material/Unstable_Grid2'
import CostumDivider from '../../components/common/CostumDivider'

const SpeceficInfo = () => {
    return (
        <Grid container>

            <Grid
                xs={12} sm={12} md={7} lg={8} xl={8}
                sx={{ paddingLeft: { sm: 2, lg: 0 } }}
            >
                <CostumDivider align='right' bColor='primary.main' cColor='primary' icon={<CodeIcon />} text='توسعه دهنده فرانت اند' />
                <Box >
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
                </Box>
            </Grid>
            <Grid
                xs={12} sm={12} md={5} lg={4} xl={4}
                sx={{mt:{xs : 3,md : 0}, display:'flex',alignItems:'end'}}
            >
                <Avatar
                    src={blackWhiteAvt}
                    variant='rounded'
                    sx={{
                        height: 250,
                        width: 250,
                        
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