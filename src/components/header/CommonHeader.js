import React, {useEffect, useState} from 'react';
import Logo from "../logo/Logo";
import {Box, createTheme, Grid, Typography} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import './header.scss'
import {Link, useLocation} from "react-router-dom";
import {useSelector} from 'react-redux'
import styled from "@emotion/styled";
import {keyframes} from "@mui/system";


const theme = createTheme({
    typography: {
        h4: {
            fontSize: '1.1rem',
            padding: '0 4px',
            fontWeight: '500'
        }
    }
})

const DotBoxContainer = styled(Box)(({theme}) => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    position: 'absolute',
    top: '-8px',
    right: '0px',
}))

const DotBox = styled(Box)(({theme}) => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#f56646',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: '#f56646',
        animation: `${dotAnimation} 4s 1s ease-out infinite`
    }
}))

const dotAnimation = keyframes`
  30% {
    transform: scale(3);
    opacity: 0;
  }

  100% {
    transform: scale(3);
    opacity: 0;
  }
`


const CommonHeader = () => {

    const redDotSelector = useSelector(state => state.redDot)
    const allCallsSelector = useSelector(state => state.allCalls)
    const {allCalls} = allCallsSelector
    const allArchivedCalls = allCalls?.filter(item => item.is_archived)


    const {pathname} = useLocation()


    return (
    <ThemeProvider theme={theme}>
        <header className='headerContainer'>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                className='fullHeight'
            >
                <Grid item xs={3}><Logo /></Grid>
                <Grid item xs={3} />

                <Grid item xs={3} className='headerHeight'>
                    <Link to='/'>
                        <Grid container alignItems="center" justifyContent='center'
                              className={`${pathname === '/' && 'active'} headerHeight tab`}
                        >
                            <Grid item><Typography variant='h4'>All Calls</Typography></Grid>
                        </Grid>
                    </Link>
                </Grid>

                {
                    allArchivedCalls?.length> 0 &&
                    <Grid item xs={3} className='headerHeight'>
                        <Link to='/archived'>
                            <Grid container alignItems="center" justifyContent='center'
                                  className={`${pathname === '/archived' && 'active'} headerHeight tab`}
                            >
                                <Grid item>
                                    <Box sx={{position: 'relative'}}>
                                        <Typography variant='h4'>Archived</Typography>
                                        {
                                            redDotSelector && <DotBoxContainer><DotBox /></DotBoxContainer>
                                        }
                                    </Box>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                }

            </Grid>
        </header>
    </ThemeProvider>
  );
};

export default CommonHeader;
