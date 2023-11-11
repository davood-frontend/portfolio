import React, { useState, useEffect } from 'react';
import { Fade } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
import { softSkillsData } from '../../constants/softSkillsData'
import SkillTemplate from './SkillTemplate';
const SoftSkills = () => {
    const [loading, setLoading] = useState(false)

    const data = softSkillsData()
    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, [])


    return (

        <Fade in={loading} timeout={1600}>

            <Grid container sx={{ justifyContent: 'space-around', my: 3 }}>
                {
                    data.map((item, index) => (
                        <SkillTemplate key={index} icon={item.icon} title={item.title} />
                    ))
                }
            </Grid>
        </Fade>
    );
};

export default SoftSkills;