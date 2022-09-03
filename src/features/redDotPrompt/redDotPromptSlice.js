import {createSlice} from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('redDot'))

export const redDotPromptSlice = createSlice({
    name: 'redDot',
    initialState,
    reducers: {
        redDotOn: state => state = true,
        redDotOff: state => state = false,
    }
})


export default redDotPromptSlice.reducer
export const {
    redDotOn,
    redDotOff,
} = redDotPromptSlice.actions
