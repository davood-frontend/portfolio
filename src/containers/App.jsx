import Mainlayout from '../layouts/Mainlayout';
import PagesContainer from './PagesContainer'
import SidebarContainer from './SidebarContainer';
import SwipeableViews from 'react-swipeable-views';
import MainContext from '../context'
import Page from '../pages/components/Page';
import { DrawerActionButton } from '../components/drawer';
import { Home, About, MyProjects, Contact } from '../pages'
import MyResume from '../pages/MyResume';
import { useTheme } from '@mui/material/styles'
import { SideBar } from '../components/sidebar'
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const theme = useTheme()
  const [pageNumber, setPageNumber] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md'))




  useEffect(() => {
    if (largerThanMd) {
      setDrawerOpen(false)
    }
  }, [largerThanMd])

  const onTabChange = (event, newValue) => {
    setPageNumber(newValue)
    console.log(newValue);
  }
  return (
    <MainContext.Provider value={{
      pageNumber,
      setPageNumber,
      drawerOpen,
      setDrawerOpen,
      onTabChange,
    }}>
      <Toaster position="top-right"
        containerStyle={{ fontFamily: 'vazir' }} />

      <Mainlayout>
        <SidebarContainer>
          <SideBar />
        </SidebarContainer>

        <DrawerActionButton />


        <PagesContainer>
          <SwipeableViews
            index={pageNumber}
            onChangeIndex={onTabChange}
            axis='x'
            onTouchStart={(e) => {e.stopPropagation()}}
            disabled={true}
          >
            <Page variant='h5' pageNumber={pageNumber} index={0}>
              <Home helmetTitle={'وبسایت داود رضایی | صفحه اصلی'} />
            </Page>
            <Page variant='h5' pageNumber={pageNumber} index={1}>
              <About helmetTitle={'وبسایت داود رضایی | درباره من'} />
            </Page>
            <Page variant='h5' pageNumber={pageNumber} index={2}>
              <MyResume helmetTitle={'وبسایت داود رضایی | رزومه من'} />
            </Page>
            <Page variant='h5' pageNumber={pageNumber} index={3}>
              <MyProjects helmetTitle={'وبسایت داود رضایی | نمونه کارها '} />
            </Page>
            <Page variant='h5' pageNumber={pageNumber} index={4}>
              <Contact helmetTitle={'وبسایت داود رضایی | ارتباط با من'} />
            </Page>
          </SwipeableViews>
        </PagesContainer>

      </Mainlayout>
    </MainContext.Provider>

  );
};

export default App;