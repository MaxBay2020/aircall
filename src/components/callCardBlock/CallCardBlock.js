import CallCard from "../callCard/CallCard";

const CallCardBlock = ({allCallsWithSameDay}) => {

    return (
        <>
            {
                allCallsWithSameDay?.map(item => (
                    <CallCard
                        key={item.id}
                        details={item}
                    />
                ))
            }
        </>
    )
}

export default CallCardBlock
