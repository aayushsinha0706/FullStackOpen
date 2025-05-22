import axios from "axios"

const baseUrl = 'http://localhost:3002/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createAnecdote = async (anecdote) => {
    const newAnecdote = {
        content: anecdote,
        votes: 0
    }
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
}

const votingAnecdote = async (id, votedAnecdote) => {
    const response = await axios.put(`${baseUrl}/${id}`, votedAnecdote)
    return response.data
}

export default {
    getAll,
    createAnecdote,
    votingAnecdote
}