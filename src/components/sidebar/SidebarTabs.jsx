import React from 'react';
import MainContext from '../../context'
import { useContext } from 'react';
import { Tabs, Tab } from '@mui/material'
import { tabsData } from '../../constants/tabsData';
import { useTheme } from '@mui/material/styles'

const SidebarTabs = () => {
    const theme = useTheme()
    const { pageNumber, onTabChange, setDrawerOpen } = useContext(MainContext)

    const data = tabsData()
    return (
        <Tabs
            orientation='vertical' 
            variant='scrollable'
            scrollButtons="auto"
            onChange={onTabChange}
            value={pageNumber}
            textColor={theme.palette.mode === 'light' ? 'inherit' : 'primary'}

        >

            {
                data.map((item, index) => (
                    <Tab
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        iconPosition='start'
                        {...item}
                        sx={{
                            minHeight: 65,
                        }}
                        onClick={() => setDrawerOpen(false)}
                    />
                ))
            }

        </Tabs>
    );
};

export default SidebarTabs;