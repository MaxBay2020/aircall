import moment from "moment";
import _ from "lodash";


/**
 * format time as: Sep, 1, 2022; 00:00; AM
 * @param utcTimeStr
 * @returns {{}}
 */
export const getTime = (utcTimeStr) => {
    const time = moment(utcTimeStr).utc().format('MMMM DD, YYYY-HH:mm-A').split('-')

    return {
        date: time[0],
        time: time[1],
        aMOrPM: time[2]
    }
}


/**
 * organize dates arr to object format, milliseconds as key, the arr of the dates within the same day as value
 * @param arr
 * @returns {{timeStampArr: *[], organizedTime: {}}}
 */
export const organizeCallsByDate = (arr) => {
    if(!arr)
        return {}

    const organizedTime = {}
    const timeStampArr = []

    arr.reduce((acc, cur) => {

        const getMilliseconds = moment(moment(cur?.created_at).utc().format('YYYY-MM-DD')).valueOf()
        if(getMilliseconds in acc){
            acc[getMilliseconds].push(cur)

        }else{
            acc[getMilliseconds] = [cur]
        }
        return acc

    }, organizedTime)

    // save keys into an array
    Object.keys(organizedTime).map(key => timeStampArr.push(key))
    _.sortBy(timeStampArr).reverse()

    return {
        timeStampArr,
        organizedTime
    }

}

/**
 * convert milliseconds to format: April,18,2018
 * @param milliseconds
 * @returns {string}
 */
export const convertToMonthDateYear = (milliseconds) => moment(Number(milliseconds)).format('MMMM, DD, YYYY')


/**
 * convert seconds to readable
 * @param secondsStr
 * @returns {string}
 */
export const convertToReadableTime = secondsStr => moment.utc(Number(secondsStr) * 1000).format('HH[h] mm[m] ss[s]')
