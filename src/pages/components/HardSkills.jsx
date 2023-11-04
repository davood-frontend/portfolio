import React, { useState ,useEffect} from 'react';
import { devSkills } from '../../constants/skills'
import Skill from './Skill'
import Grid from '@mui/material/Unstable_Grid2'

const HardSkills = () => {
    const [html, setHtml] = useState(0)
    const [css, setCss] = useState(0)
    const [javascript, setJavascript] = useState(0)
    const [react, setReact] = useState(0)
    const [bootstrap, setBootstrap] = useState(0)
    const [mui, setMui] = useState(0)
    const [git, setGit] = useState(0)

    const { htmlSkill, cssSkill, javascriptSkill, reactSkill, bootStrapSkill, muiSkill, gitSkill } = devSkills

    useEffect(() => {
   
        
        const tiemr = setInterval(() => {
            setHtml(prev => { return Math.min(prev + 1, 90) })
            setCss(prev => { return Math.min(prev + 1, 80) })
            setJavascript(prev => { return Math.min(prev + 1, 70) })
            setBootstrap(prev => { return Math.min(prev + 1, 75) })
            setReact(prev => { return Math.min(prev + 1, 70) })
            setMui(prev => { return Math.min(prev + 1, 70) })
            setGit(prev => { return Math.min(prev + 1, 40) })


        }, 70)

        const deleteInterval = setTimeout(() =>{
            clearInterval(tiemr)
        },6000)

        return () =>{
            clearTimeout(deleteInterval)
        }
    }, [])

    return (

        <Grid container>

            <Skill name={htmlSkill.name} color={htmlSkill.color} value={html} icon={htmlSkill.icon} />
            <Skill name={cssSkill.name} color={cssSkill.color} value={css} icon={cssSkill.icon} />
            <Skill name={javascriptSkill.name} color={javascriptSkill.color} value={javascript} icon={javascriptSkill.icon} />
            <Skill name={reactSkill.name} color={reactSkill.color} value={react} icon={reactSkill.icon} />
            <Skill name={bootStrapSkill.name} color={bootStrapSkill.color} value={bootstrap} icon={bootStrapSkill.icon} />
            <Skill name={muiSkill.name} color={muiSkill.color} value={mui} icon={muiSkill.icon} />
            <Skill name={gitSkill.name} color={gitSkill.color} value={git} icon={gitSkill.icon} />

        </Grid>
    );
};

export default HardSkills;