import {configureStore}  from "@reduxjs/toolkit";
import redDotReducers from '../features/redDotPrompt/redDotPromptSlice'
import allCallsReducers from '../features/allCalls/AllCallsSlice'

const store = configureStore({
    reducer: {
        allCalls: allCallsReducers,
        redDot: redDotReducers
    }
})

export default store
