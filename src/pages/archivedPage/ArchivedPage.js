import Layout from "../../layout/Layout";
import {useDispatch, useSelector} from 'react-redux'
import {Box, createTheme, Divider, Typography} from "@mui/material";
import {convertToMonthDateYear, organizeCallsByDate} from "../../utils/utils";
import CallCardBlock from "../../components/callCardBlock/CallCardBlock";
import {useEffect, useState} from "react";
import Spinner from "../../components/spinner/Spinner";
import {redDotOff} from "../../features/redDotPrompt/redDotPromptSlice";
import {ThemeProvider} from "@emotion/react";

const theme = createTheme({

    typography: {
        caption: {
            fontSize: '12px',
            color: 'rgba(92,92,92,0.65)'
        }
    }
})

const ArchivedPage = () => {

    const [organizedAllCalls, setOrganizedAllCalls] = useState(null);

    const dispatch = useDispatch()

    const allCallsSelector = useSelector(state => state.allCalls)
    const { allCalls, isLoading } = allCallsSelector
    const [allArchivedCalls, setAllArchivedCalls] = useState([]);

    useEffect(() => {
        setAllArchivedCalls(allCalls?.filter(item => item.is_archived))
    }, [allCalls]);

    useEffect(() => {
        setOrganizedAllCalls(organizeCallsByDate(allArchivedCalls))
    }, [allArchivedCalls]);


    useEffect(() => {
        dispatch(redDotOff())
        localStorage.setItem('redDot', 'false')
    }, [])


    return (
        <Layout page='commonPage'>
            <ThemeProvider theme={theme}>
                {
                    isLoading && <Spinner />
                }
                {
                    organizedAllCalls?.timeStampArr?.map(item =>  (
                        <Box key={item}>
                            <Divider sx={{marginBottom: '15px'}}><Typography variant='caption'>{convertToMonthDateYear(item)}</Typography></Divider>
                            <CallCardBlock
                                allCallsWithSameDay={ organizedAllCalls?.organizedTime[item]}
                            />
                        </Box>
                    ))
                }
            </ThemeProvider>
        </Layout>
    )
}

export default ArchivedPage
