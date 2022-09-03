import './footer.scss'
import {Box, Grid, IconButton} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WifiTetheringOutlinedIcon from '@mui/icons-material/WifiTetheringOutlined';
import DIalPanel from "../dialPanel/DIalPanel";

const Footer = () => {
    return (
        <footer className='footerContainer'>
            <Grid
                container
                alignItems='center'
                justifyContent='space-between'
                className='fullHeight'
            >
                <Grid item className='fullHeight'>
                    <Grid container alignItems='center' className='fullHeight active'>
                        <Grid item><IconButton><LocalPhoneIcon /></IconButton></Grid>
                    </Grid>
                </Grid>

                <Grid item className='fullHeight'>
                    <Grid container alignItems='center' className='fullHeight'>
                        <Grid item><IconButton><PermIdentityOutlinedIcon/></IconButton></Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <DIalPanel />

                </Grid>

                <Grid item className='fullHeight'>
                    <Grid container alignItems='center' className='fullHeight'>
                        <Grid item><IconButton><SettingsOutlinedIcon /></IconButton></Grid>
                    </Grid>
                </Grid>

                <Grid item className='fullHeight'>
                    <Grid container alignItems='center' className='fullHeight '>
                        <Grid item><IconButton><WifiTetheringOutlinedIcon color='secondary' /></IconButton></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
