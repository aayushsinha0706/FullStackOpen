import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterChange(state, action){
            const anecdoteFilter = action.payload
            return anecdoteFilter
        }
    }
})

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer

/*
const filterReducer = (state = '' , action) => {
    switch (action.type){
        case 'FILTER':
            return action.payload
        default:
            return state
    }
}

export const filterChange = (anecdoteFilter) => {
    return {
        type: 'FILTER',
        payload: anecdoteFilter
    }
}

export default filterReducer
*/