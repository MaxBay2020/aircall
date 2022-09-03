import Logo from "../logo/Logo";
import './header.scss'
import {Grid, IconButton} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {useNavigate} from "react-router-dom";

const DetailPageHeader = () => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <header className='headerContainer'>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                className='fullHeight'
            >
                <Grid item xs={2}><IconButton onClick={() => handleGoBack()}><KeyboardArrowLeftIcon /></IconButton></Grid>
                <Grid item xs={6} />
                <Grid item xs={3}><Logo /></Grid>
                <Grid item xs={1} />
            </Grid>
        </header>
    )
}

export default DetailPageHeader
