const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

/**
 * format time as: Sep, 1, 2022; 00:00; AM
 * @param str
 * @returns {{}}
 */
export const getTime = (str) => {
    const date = new Date(str)
    const hour = date.getUTCHours()
    const minutes = date.getUTCMinutes()

    const formattedDate = `${monthNames[date.getUTCMonth()]}, ${date.getUTCDate()}, ${date.getUTCFullYear()}`
    const formattedTime = hour - 10 < 0 ? `0${hour}:${minutes}` : `${hour}:${minutes}`
    const formattedAMOrPM = hour < 12 ? 'AM' : 'PM'


    return {
        formattedDate,
        formattedTime,
        formattedAMOrPM
    }
}


