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