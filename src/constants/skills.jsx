import React from "react";
import { blue, deepOrange, deepPurple, lightBlue, orange, yellow, grey } from "@mui/material/colors";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiMui, SiGit, SiNextdotjs } from "react-icons/si";

export const devSkills = [
    {
        name: 'HTML',
        icon: <SiHtml5 style={{ fontSize: '60px', color: deepOrange[500] }} />,
    },
    {
        name: 'CSS',
        icon: <SiCss3 style={{ fontSize: '60px', color: blue[400], }} />,
    },

    {
        name: 'JAVASCRIPT',
        icon: <SiJavascript style={{ fontSize: '60px', color: yellow[700] }} />,
    },
    {
        name: 'REACT',
        icon: <SiReact style={{ fontSize: '60px', color: lightBlue[600] }} />,
    },
    // {
    //     name: 'Next js',
    //     icon: <SiNextdotjs style={{ fontSize: '60px', color: grey[900] }} />,
    // },

    {
        name: 'MATERIAL UI',
        icon: <SiMui style={{ fontSize: '60px', color: blue[600] }} />,
    },
    {
        name: 'BOOTSTRAP',
        icon: <SiBootstrap style={{ fontSize: '60px', color: deepPurple[400] }} />,
    },
    {
        name: 'GIT',
        icon: <SiGit style={{ fontSize: '60px', color: deepOrange[600] }} />,
    },

]