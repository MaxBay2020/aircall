import {Grid} from "@mui/material";

const Spinner = () => {
    return (
        <Grid
            container sx={{height: '100%', width: '100%'}}
            alignItems='center'
            justifyContent='center'
        >
            <Grid item >
                <img
                    style={{width: '100px'}}
                    src="https://acegif.com/wp-content/uploads/loading-78.gif"
                    alt="loading"
                />
            </Grid>

        </Grid>
    )
}

export default Spinner
