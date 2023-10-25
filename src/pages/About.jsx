
import { Typography, Card, CardContent, Avatar, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Helmet } from 'react-helmet-async'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CostumDivider from '../components/common/CostumDivider'
import { grey } from '@mui/material/colors'
import SpeceficInfo from './components/SpeceficInfo';
const About = ({ helmetTitle }) => {

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

                <SpeceficInfo />


                <CostumDivider align='center' bColor='secondary.main' cColor='secondary' icon={<EmojiEmotionsIcon sx={{ fontSize: '20px', fill: grey[800] }} />} text='درباره من' />

                <Typography textAlign='left' color='black' sx={{ px: 2 }}>
                    اینجوری direction رو عوض میکنیم
                </Typography>



            </CardContent>
        </Card>
    )
}
export default About;