
import { Typography, Card, CardContent, Avatar, Box } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CostumDivider from '../components/common/CostumDivider'
import { grey } from '@mui/material/colors'
import SpeceficInfo from './components/SpeceficInfo';
import { useRef } from 'react';
import { useEffect } from 'react';
import Typed from 'typed.js'
const About = ({ helmetTitle }) => {
    const textEl = useRef(null)
    const string = [`علاقه من به طراحی سایت مثل خیلی از اتفاقات دیگه زندگیم کاملا رندوم و غیرمنتظره بود. <br />
    یادمه یه روز گرم بهاری وقتی توی کلاس گرافیک مشغول طراحی یه لوگو بودم، دوستم بهم گفت امروز برو خونه و یه سند نوت پد باز کن و 
     وقتی که کارت تموم شد با پسوند اچ تی ام ال ذخیرش کن. منم همون کارو انجام دادم و از نتیجش واقعا شوکه شدم چون بجای یه صفحه نوت پد یه صفحه وب جلوم بود! <br />
    اونجا بود که جرقه برنامه نویسی برای اولین بار داخل من روشن شد و پای منو داخل این دنیای زیبا ولی سخت گذاشت. <br />
    چند سال پیش خیلی ثابت قدم نبودم و کسی نبود که راهنماییم کنه پس وارد چند تا حوزه مختلف شدم و یه جا بند نشدم ، مثلا بازی سازی، طراحی وب، امنیت و غیره که چون طراحی وب از همشون برام جذاب تر بود همونو انتخاب کردم و الان بیشتر از دوساله که مشغول یادگیری این حوزه هستم.`]

    useEffect(() => {
        const typedText = new Typed(textEl.current, {
            strings: string,
            typeSpeed: 10,

        })

        return () => {
            typedText.destroy()
        }
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

                <SpeceficInfo />


                <CostumDivider align='center' bColor='secondary.main' cColor='secondary' icon={<EmojiEmotionsIcon sx={{ fontSize: '20px', fill: grey[800] }} />} text='درباره من' />

                <Box sx={{ px: 3 }}>

                    <Typography textAlign='left' ref={textEl} color='black' sx={{ px: 2, direction: 'ltr', lineHeight: 2.5 }} variant='subtitle2' />

                </Box>


            </CardContent>
        </Card>
    )
}
export default About;