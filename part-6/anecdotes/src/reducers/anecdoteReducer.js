import { createSlice } from "@reduxjs/toolkit"
  
const getId = () => (100000 * Math.random()).toFixed(0)
  
export const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action){
      const id = action.payload
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    },
    newAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdote(state, action){
      const anecdotes = action.payload
      return anecdotes
    }
  }
 })

export const { voteAnecdote, newAnecdote, setAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
 

/* 
  
  const anecdoteReducer = (state = initialState, action) => {
    switch (action.type) {

      case 'NEW_ANECDOTE':
        return [...state,action.payload]

      case 'VOTE': {
        const id = action.payload.id
        const anecdoteToChange = state.find(anecdote => anecdote.id === id)
        const changedAnecdote = {
          ...anecdoteToChange,
          votes: anecdoteToChange.votes + 1
        }
        return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
      }

      default:
        return state
    }
  }

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    payload: { id }
  }
}

export const newAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: asObject(anecdote)
  }
}
  
export default anecdoteReducer
*/