import React,{useState,useEffect} from 'react';
import { devSkills } from '../../constants/skills'
import Grid from '@mui/material/Unstable_Grid2'
import SkillTemplate from './SkillTemplate';
import { Fade } from '@mui/material';

const HardSkills = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, [])

    return (
        <Fade in={loading} timeout={1600}>


            <Grid container sx={{ justifyContent: 'start', my: 3, direction: 'ltr' }}>
                {devSkills.map((item, index) => <SkillTemplate key={index} icon={item.icon} title={item.name} />)}
            </Grid>

        </Fade>
    );
};

export default HardSkills;