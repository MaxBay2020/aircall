import Layout from "../../layout/Layout";
import CallCard from "../../components/callCard/CallCard";
import {useEffect, useState} from "react";
import axios from 'axios'
import Spinner from "../../components/spinner/Spinner";

const AllCallsPage = () => {

    const [allCalls, setAllCalls] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllCalls('activities')
    }, [])

    const getAllCalls = async (url) => {
       try {
           const res = await axios.get(`${process.env.REACT_APP_BACK_END_BASE_URL}/${url}`)
           res.status === 200 && setAllCalls(res.data)
           setIsLoading(false)
       }catch (e){
           console.log(e.message)
       }
    }

    console.log(allCalls)

    return (
        <Layout>
            {
                isLoading && <Spinner />
            }
            {
                allCalls?.map(item =>  (
                    <CallCard
                        key={item.id}
                        call_type={item.call_type}
                        created_at={item.created_at}
                        direction={item.direction}
                        duration={item.duration}
                        from={item.from}
                        is_archived={item.is_archived}
                        to={item.to}
                        via={item.via}
                    />
                ))
            }

        </Layout>
    )
}

export default AllCallsPage
