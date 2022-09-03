import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    allCalls: [],
    isLoading: true,
    hasError: false,
    isClear: false
}

const url = `${process.env.REACT_APP_BACK_END_BASE_URL}/activities`
export const getAllArchivedCallFromServer = createAsyncThunk('allArchivedCalls/getAllArchivedCallFromServer', async (thunkApi) => {
    try{
        const res = await axios.get(url)
        if(res.status === 200)
            return res.data
    }catch (e){
        return thunkApi.rejectWithValue(e.message)
    }
})

export const allCallsSlice = createSlice({
    name: 'allArchivedCalls',
    initialState,
    reducers: {
        archiveOn: (state, action) => {
            const call = state.allCalls.find(item => item.id === action.payload)
            call.is_archived = true
            state.isClear = false
            return state
        },

        archiveOff: (state, action) => {
            const call = state.allCalls.find(item => item.id === action.payload)
            call.is_archived = false
            const findArchivedCall = state.allCalls.find(item => item.is_archived)
            if(!findArchivedCall)
                state.isClear = true
            return state
        }
    },

    extraReducers: {
        [getAllArchivedCallFromServer.pending]: state => {
            state.isLoading = true
        },

        [getAllArchivedCallFromServer.fulfilled]: (state, action) => {
            state.isLoading = false
            state.allCalls = action.payload
        },
        [getAllArchivedCallFromServer.rejected]: (state, action) => {
            state.isLoading = false
            state.hasError = true
            console.log(action.payload)
        }
    }
})

export default allCallsSlice.reducer
export const {
    archiveOn,
    archiveOff

} = allCallsSlice.actions
