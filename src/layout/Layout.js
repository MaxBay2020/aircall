import Header from "../components/header/Header";
import {Paper} from "@mui/material";
import './layout.scss'

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div className='content-container'>
                {children}
            </div>
        </>
    )
}

export default Layout
