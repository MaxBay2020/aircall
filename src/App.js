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

const theme = createTheme({
    palette: {
        primary: {
            main: '#f56646'
        }
    }
})

function App() {
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
