import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => (
     axios.get(baseUrl).then(response => response.data)
)

export const postAnecdotes = (newAnecdote) => (
    axios.post(baseUrl, newAnecdote).then(response => response.data)
)

export const updateAnecdotes = (updatedAnecdote) => (
    axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote).then(response => response.data)
)