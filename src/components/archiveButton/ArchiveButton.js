import {Box, createTheme, IconButton} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import styled from "@emotion/styled";
import axios from "axios";
import {redDotOn} from "../../features/redDotPrompt/redDotPromptSlice";
import {useDispatch, useSelector} from "react-redux";
import {ThemeProvider} from "@emotion/react";
import {useEffect, useState} from "react";
import {
    archiveOff, archiveOn,
} from "../../features/allCalls/AllCallsSlice";
import {useNavigate} from "react-router-dom";

const ArchiveIconBox = styled(Box)(({theme}) => ({
    position: 'absolute',
    top: '-15px',
    right: '-16px',
    backgroundColor: '#f8f8f8'
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
})

const ArchiveButton = ({details}) => {

    console.log(details)

    const { id, is_archived } = details

    const [isArchived, setIsArchived] = useState(is_archived);
    const dispatch = useDispatch()

    const allCallsSelector = useSelector(state => state.allCalls)
    const { isClear } = allCallsSelector

    // const navigate = useNavigate()
    // useEffect(() => {
    //     isClear && navigate('/')
    // }, [isClear]);

    const handleArchive = async id => {
        try {

            const config = {
                is_archived: !is_archived
            }
            const res = await axios.post(`${process.env.REACT_APP_BACK_END_BASE_URL}/activities/${id}`, config)

            if(res.status === 200){
                if(is_archived){
                    dispatch(archiveOff(id))
                }else{
                    dispatch(archiveOn(id))
                    dispatch(redDotOn())
                    localStorage.setItem('redDot', 'true')
                }
                setIsArchived(prev => !prev)
            }

        }catch (e){
            console.log(e.message)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <ArchiveIconBox onClick={()=>handleArchive(id)}>
                <IconButton>
                    {isArchived ? <BookmarkIcon color='primary' /> : <BookmarkBorderIcon color='primary'  />}
                </IconButton>
            </ArchiveIconBox>
        </ThemeProvider>
    )
}

export default ArchiveButton
