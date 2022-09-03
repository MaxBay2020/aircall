import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import DetailPage from "./pages/detailpage/DetailPage";
import AllCallsPage from "./pages/allCallsPage/AllCallsPage";
import ArchivedPage from "./pages/archivedPage/ArchivedPage";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllArchivedCallFromServer} from "./features/allCalls/AllCallsSlice";

const theme = createTheme({
    palette: {
        primary: {
            main: '#f56646'
        },
        secondary: {
            main: '#2da32f'
        }
    }
})

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllArchivedCallFromServer())
    }, []);

  return (
    <ThemeProvider theme={theme}>
        <div className='container'>
            <Router>
                <Routes>
                    <Route path='/' element={<AllCallsPage />} />
                    <Route path='/archived' element={<ArchivedPage />}/>
                    <Route path='/detail'>
                        <Route path=':id' element={<DetailPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    </ThemeProvider>
  );
}

export default App;
