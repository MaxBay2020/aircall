import Layout from "../../layout/Layout";
import {useEffect, useState} from "react";
import Spinner from "../../components/spinner/Spinner";
import {convertToMonthDateYear, organizeCallsByDate} from "../../utils/utils";
import CallCardBlock from "../../components/callCardBlock/CallCardBlock";
import {Box, createTheme, Divider, Typography} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import {useSelector} from "react-redux";

const theme = createTheme({

    typography: {
        caption: {
            fontSize: '12px',
            color: 'rgba(92,92,92,0.65)'
        }
    }
})

const AllCallsPage = () => {

    const [organizedAllCalls, setOrganizedAllCalls] = useState(null);

    const allCallsSelector = useSelector(state => state.allCalls)
    const { allCalls, isLoading } = allCallsSelector


    useEffect(() => {
        setOrganizedAllCalls(organizeCallsByDate(allCalls))
    }, [allCalls]);


    useEffect(() => {
        setOrganizedAllCalls(organizeCallsByDate(allCalls))
    }, [allCalls]);


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

export default AllCallsPage
