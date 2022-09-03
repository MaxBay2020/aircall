import Layout from "../../layout/Layout";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import DetailCard from "../../components/detailCard/DetailCard";

const DetailPage = () => {

    const [currentCallDetail, setCurrentCallDetail] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(true)

    const { id } = useParams()


    useEffect(() => {
        getCallById(id)
    }, [])

    const getCallById = async id => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACK_END_BASE_URL}/activities/${id}`)
            if(res.status === 200){
                setCurrentCallDetail(res.data)
                setIsLoading(false)
                setHasError(false)
            }
        }catch (e){
            setIsLoading(false)
            setHasError(true)
        }
    }


    return (
        <Layout page='detailPage'>
            {
                isLoading && <Spinner />
            }
            {
                currentCallDetail &&
                <DetailCard currentCallDetail={currentCallDetail} />

            }
        </Layout>
    )
}

export default DetailPage
