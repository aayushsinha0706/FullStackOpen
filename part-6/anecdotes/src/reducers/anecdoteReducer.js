import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'
  
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
    
    updateAnecdote(state, action){
      const id = action.payload.id
      return state.map(anecdote => anecdote.id !== id ? anecdote : action.payload)
    },
    setAnecdote(state, action){
      const anecdotes = action.payload
      return anecdotes
    },
    addAnecdote (state, action) {
      state.push(action.payload)
    }
  }
 })

export const { updateAnecdote, setAnecdote, addAnecdote } = anecdoteSlice.actions

export const initializeAnecdote = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}

export const newAnecdote = (anecdote) => {
  return async (dispatch) => {
    const createdAnecdote = await anecdoteService.createAnecdote(anecdote)
    dispatch(addAnecdote(createdAnecdote))
  }
}

export const voteAnecdote = (id) => {
  return async (dispatch, getState) => {
    const anecdotes = getState().anecdotes
    const anecdoteToChange = anecdotes.find(anecdote => anecdote.id === id)
    const votedAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1
    }

    const updatedAnecdote = await anecdoteService.votingAnecdote(id, votedAnecdote)
    dispatch(updateAnecdote(updatedAnecdote))
  }
}


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