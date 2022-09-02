import {Box, Card, createTheme, Grid, IconButton, Typography} from "@mui/material";
import styled from "@emotion/styled";
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import {ThemeProvider} from "@emotion/react";
import {useEffect, useState} from "react";
import {getTime} from "../../utils/utils";

const MyCard = styled(Box)(({theme}) => ({
    backgroundColor: 'inherit',
    height: '60px',
    borderRadius: '10px',
    border: '1px solid rgba(100,100,100,0.4)',
    padding: '12px 0 12px 4px',
    marginBottom: '30px',
    '&:hover' :{
        cursor: 'pointer'
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
            main: '#f56646'
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

const CallCard = (props) => {
    const {
        call_type,
        created_at,
        direction,
        duration,
        from,
        is_archived,
        to,
        via
    } = props

    const {
        formattedDate,
        formattedTime,
        formattedAMOrPM
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



    const count = 8


    return (
        <ThemeProvider theme={theme}>
            <MyCard>
                <span>{formattedDate}</span>
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
                                    <Grid item><Typography variant='h6'>{count}</Typography></Grid>
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
                            <Grid item><Typography variant='timeFont'>{formattedTime}</Typography></Grid>
                            <Grid item><Typography variant='timeSlotFont'>{formattedAMOrPM}</Typography></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </MyCard>
        </ThemeProvider>
    )
}

export default CallCard
