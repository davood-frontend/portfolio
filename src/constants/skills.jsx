import React from "react";
import { blue, deepOrange, deepPurple, lightBlue, orange, yellow } from "@mui/material/colors";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiMui, SiGit } from "react-icons/si";


export const devSkills = {
    htmlSkill: {
        id: 0,
        name: 'HTML',
        icon: <SiHtml5 style={{ marginLeft: '10px' }} />,
        color: deepOrange[500],
        value: 90
    },
    cssSkill: {
        id: 1,
        name: 'CSS',
        icon: <SiCss3 style={{ marginLeft: '10px' }} />,
        color: blue[400],
        value: 80
    },
    javascriptSkill: {
        id: 2,
        name: 'JAVASCRIPT',
        icon: <SiJavascript style={{ marginLeft: '10px' }} />,
        color: yellow[700],
        value : 85
    },
    reactSkill: {
        id: 3,
        name: 'REACT',
        icon: <SiReact style={{ marginLeft: '10px' }} />,
        color: lightBlue[600],
        value : 80
    },
    bootStrapSkill: {
        id: 4,
        name: 'BOOTSTRAP',
        icon: <SiBootstrap style={{ marginLeft: '10px' }} />,
        color: deepPurple[400],
        value : 80
    },
    muiSkill: {
        id: 5,
        name: 'MATERIAL UI',
        icon: <SiMui style={{ marginLeft: '10px' }} />,
        color: blue[600],
        value : 60
    },
    gitSkill: {
        id: 6,
        name: 'GIT',
        icon: <SiGit style={{ marginLeft: '10px' }} />,
        color: deepOrange[600],
        value : 60
    },

}