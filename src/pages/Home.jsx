import { useEffect, useRef, useCallback } from 'react'
import { Box, Typography } from '@mui/material'
import beach from '../assets/beach.jpg'
import Typed from 'typed.js'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { links } from '../constants/particles'
import {Helmet} from 'react-helmet-async'
const Home = ({helmetTitle}) => {
    const nameEl = useRef(null)
    const infoEl = useRef(null)
    const strings = [
        'من یک توسعه دهنده فرانت اند هستم',
        'من یک محتوا ساز دنیای برنامه نویسی هستم',
        'من یک برنامه نویس هستم',
    ]

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: [' داود رضایی '],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 10,
            showCursor: false
        })

        const typedInfo = new Typed(infoEl.current, {
            strings,
            startDelay: 1400,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 50,
            loop: true,
            showCursor: false
        })

        return () => {
            typedName.destroy()
            typedInfo.destroy()
        }
    }, [])

    const particlesInit = useCallback(async engine => {
        await loadFull(engine)
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, [])
    return (
        <Box sx={{
            backgroundImage: `url(${beach})`,
            height: '100vh',
            overflow:'hidden',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position:'relative',
        }}>
            <Helmet>
                <title>
                    {helmetTitle}
                </title>
            </Helmet>
            <Particles init={particlesInit} id='tsparticles' loaded={particlesLoaded} options={links} style={{position:'absolute'}}/>
            <Typography variant='h3' ref={nameEl} sx={{ mb: 5 ,fontSize : {xs : '35px',sm : '45px', md : '50px'}}} />
            <Typography variant='h4' ref={infoEl} sx={{fontSize : {xs : '15px', sm : '25px', md : '30px'}}}/>


        </Box>
    )
}
export default Home;