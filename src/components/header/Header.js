import React, {useState} from 'react';
import Logo from "../logo/Logo";
import {createTheme, Grid, Typography} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import './header.scss'
import {Link, useLocation} from "react-router-dom";


const theme = createTheme({
    typography: {
        h4: {
            fontSize: '1.1rem',
            padding: '0 4px',
            fontWeight: '500'
        }
    }
})


const Header = () => {
    const [showArchived, setShowArchived] = useState(true)

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
                        <Grid container alignItems="center"
                              className={`${pathname === '/' && 'active'} headerHeight tab`}
                        >
                            <Grid item><Typography variant='h4'>All Calls</Typography></Grid>
                        </Grid>
                    </Link>
                </Grid>

                {
                    showArchived &&
                    <Grid item xs={3} className='headerHeight'>
                        <Link to='/archived'>
                            <Grid container alignItems="center"
                                  className={`${pathname === '/archived' && 'active'} headerHeight tab`}
                            >
                                <Grid item><Typography variant='h4'>Archived</Typography></Grid>
                            </Grid>
                        </Link>
                    </Grid>
                }

            </Grid>
        </header>
    </ThemeProvider>
  );
};

export default Header;
