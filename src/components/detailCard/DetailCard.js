import {Grid, Card, Typography, Box, createTheme} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {convertToReadableTime, getTime} from "../../utils/utils";
import styled from "@emotion/styled";
import ArchiveButton from "../archiveButton/ArchiveButton";
import {ThemeProvider} from "@emotion/react";


const TimeSlotCard = styled(Card)(({theme}) => ({
    padding: '8px 10px',
    borderRadius: '8px'
}))

const ArchiveButtonBox = styled(Box)(({theme}) => ({
    position: 'absolute',
    top: 0,
    right: 0
}))

const theme = createTheme({
    typography: {
        h4 :{
            fontSize: '26px'
        },
        body1: {
            fontSize: '18px'
        },
        body2: {
            fontSize: '14px',
            fontWeight: '300'
        },
        subtitle: {
            lineHeight: '1.43',
            fontSize: '14px',
            fontWeight: '600',
        },
        caption: {
            fontSize: '10px',
            fontWeight: '300',
            color: 'rgba(61,61,61,0.79)'
        },
    }
})

const DetailCard = ({currentCallDetail}) => {

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
    }= currentCallDetail

    const renderAnsweredCall = () => (
        <Grid container direction="column">
            <Grid item><Typography variant='subtitle'>{direction} Call</Typography></Grid>
            <Grid item><Typography variant='caption'>{convertToReadableTime(Number(duration))}</Typography></Grid>
        </Grid>
    )

    const renderMissedOrVoiceMailCall = () => (
        <Grid container direction="column">
            <Grid item><Typography variant='subtitle'>{call_type} Call</Typography></Grid>
        </Grid>
    )


    return (
        <ThemeProvider theme={theme}>
            <Box sx={{position: 'relative'}}>
                <ArchiveButtonBox><ArchiveButton details={currentCallDetail} /></ArchiveButtonBox>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={8}
                >
                    <Grid item xs={6}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item><AccountCircleOutlinedIcon sx={{fontSize: '100px', color: 'rgba(28,28,28,0.5)'}}/></Grid>
                            <Grid item><Typography variant='h4'>{from}</Typography></Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={6} sx={{width: '100%',}}>
                        <TimeSlotCard elevation={0}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                gap={1}
                            >
                                <Grid item><Typography variant='body1'>{getTime(created_at).date}</Typography></Grid>
                                <Grid item sx={{width: '100%',}}>
                                    <Grid container gap={2}>
                                        <Grid item>
                                            <Typography variant='body2'>{getTime(created_at).time}</Typography>
                                        </Grid>

                                        <Grid item>
                                            {
                                                call_type === 'answered' ?
                                                    renderAnsweredCall() : renderMissedOrVoiceMailCall()
                                            }
                                        </Grid>

                                        <Grid item sx={{marginLeft: 'auto'}}>
                                            <Typography variant='body2'>by {via}</Typography>
                                        </Grid>


                                    </Grid>
                                </Grid>

                            </Grid>
                        </TimeSlotCard>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>


    )
}

export default DetailCard
