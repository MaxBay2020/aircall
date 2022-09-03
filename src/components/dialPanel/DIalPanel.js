import {Box, Grid} from "@mui/material";
import styled from "@emotion/styled";
import './dialPanel.scss'

const GreenButtonBox = styled(Box)(({theme}) => ({
    width: '50px',
    height: '50px',
    position: 'relative',
}))

const GreenButton = styled(Box)(({theme}) => ({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#2da32f',
    position: 'absolute',
    top: '-16px',
    transform: 'scale(1.2)',
    cursor: 'pointer',

    '&:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        top: 0,
        left: 0,
        boxSizing: 'border-box',
        // backgroundColor: '#fff',
        border: '1px solid rgba(100,100,100,0.2)',
        transform: 'scale(1.2)'
    }
}))

const Dot = styled(Box)(({theme}) => ({
    width: '100%',
    height: '100%',
    margin: '0 auto',
    borderRadius: '50%',
    backgroundColor: '#fff',
    transform: 'scale(0.6)'
}))

const DIalPanel = () => {
    return (
        <GreenButtonBox>
            <GreenButton>
                <Box className='dotsContainer'>
                    <Grid container sx={{width: '100%', height: '100%'}}>
                        {
                            new Array(9).fill(0).map((item, index) => (
                                <Grid key={index} item xs={4}>
                                    <Box sx={{width: '100%', height: '100%'}}><Dot /></Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </GreenButton>
        </GreenButtonBox>
    )
}

export default DIalPanel
