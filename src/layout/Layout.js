import CommonHeader from "../components/header/CommonHeader";
import './layout.scss'
import DetailPageHeader from "../components/header/DetailPageHeader";
import Footer from "../components/footer/Footer";

const Layout = ({children, page}) => {

    const renderHeader = () =>{
        switch (page){
            case 'commonPage':
                return <CommonHeader />
            case 'detailPage':
                return  <DetailPageHeader />
            default:
                return <CommonHeader />
        }
    }

    return (
        <>
            {
                renderHeader()
            }
            <div className='content-container'>
                {children}
            </div>

            <Footer />
        </>
    )
}

export default Layout
