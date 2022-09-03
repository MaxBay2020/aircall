import {Box, createTheme, Grid, IconButton, Typography} from "@mui/material";
import styled from "@emotion/styled";
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import {ThemeProvider} from "@emotion/react";
import {getTime} from "../../utils/utils";
import {Link} from "react-router-dom";
import ArchiveButton from "../archiveButton/ArchiveButton";

const MyCard = styled(Box)(({theme}) => ({
    backgroundColor: 'inherit',
    height: '60px',
    borderRadius: '10px',
    border: '1px solid rgba(100,100,100,0.4)',
    padding: '12px 0 12px 4px',
    marginBottom: '20px',
    transition: 'all 0.2s ease-in-out',
    '&:hover' :{
        cursor: 'pointer',
        boxShadow: '0 1px 8px rgba(100,100,100,0.4)'
    }
}))

const Dot = styled(Box)(({theme}) => ({
    height: '3px',
    width: '3px',
    backgroundColor: 'rgba(146,146,146,0.34)',
    borderRadius: '50%'
}))

const theme = createTheme({
    palette: {
        primary: {
            main: '#f56646',
            dark: '#f56646',
        },
        secondary: {
            main: '#2da32f'
        }
    },
    typography: {
        h5: {
            fontSize: '16px',
            fontWeight: '600',
            color: '#181818',
            maxWidth: '140px',
            wrap: 'nowrap'

        },
        h6: {
            width: '16px',
            height: '16px',
            fontSize: '10px',
            fontWeight: '600',
            textAlign: 'center',
            marginLeft: '4px',
            backgroundColor: 'rgb(248,85,50)',
            color: '#fff',
            borderRadius: '50%'
        },
        body1: {
            fontSize: '12px',
            maxWidth: '180px',
            color: 'rgba(73,73,73,0.65)',
        },
        timeFont: {
            fontSize: '12px',
            marginLeft: '20px',
            color: 'rgba(73,73,73,0.65)',
        },
        timeSlotFont: {
            fontSize: '12px',
            borderRadius: '4px 0 0 4px',
            padding: '0 2px',
            fontWeight: '600',
            border: '1px solid rgba(100,100,100,0.4)',
            borderRight: 'none',
            color: 'rgba(73,73,73,0.65)',
        }

    }
})

const CardContainer = styled(Box)(({theme}) => ({
    position: 'relative',
}))



const CallCard = ({details}) => {
    const {
        id,
        call_type,
        created_at,
        direction,
        duration,
        from,
        is_archived,
        to,
        via,
    } = details

    const {
        date,
        time,
        aMOrPM,
    } = getTime(created_at)


    const renderIcon = () => {
        switch (call_type){
            case 'missed':
                return <PhoneMissedIcon color='primary' />
            case 'answered':
                return <PermPhoneMsgIcon color='secondary' />
            case 'voicemail':
                return <VoicemailIcon color='primary' />
            default:
                break
        }
    }






    return (
        <ThemeProvider theme={theme}>
            <CardContainer>
                <Link to={`/detail/${id}`}>
                    <MyCard>
                        <Grid container alignItems='center'>
                            {/*icon*/}
                            <Grid item xs={2}>
                                <IconButton>{renderIcon()}</IconButton>
                            </Grid>

                            {/*details*/}
                            <Grid item xs={7}>
                                <Grid container direction='column'>
                                    <Grid item>
                                        <Grid container alignItems='center'>
                                            <Grid item><Typography variant='h5' noWrap>{from}</Typography></Grid>
                                            {/*<Grid item><Typography variant='h6'>{count}</Typography></Grid>*/}
                                        </Grid>
                                    </Grid>

                                    <Grid item><Typography variant='body1' noWrap>tried to call on {to}</Typography></Grid>
                                </Grid>
                            </Grid>

                            {/*time*/}
                            <Grid item xs={3}>
                                <Grid container alignItems='center' justifyContent='space-between'>
                                    <Grid item>
                                        <Grid container direction='column' gap='3px'>
                                            <Grid item><Dot /></Grid>
                                            <Grid item><Dot /></Grid>
                                            <Grid item><Dot /></Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item><Typography variant='timeFont'>{time}</Typography></Grid>
                                    <Grid item><Typography variant='timeSlotFont'>{aMOrPM}</Typography></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </MyCard>
                </Link>

                <ArchiveButton details={details} />


            </CardContainer>

        </ThemeProvider>
    )
}

export default CallCard
