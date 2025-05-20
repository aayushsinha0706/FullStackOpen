import { newAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import { useDispatch } from "react-redux"
import anecdoteService from '../services/anecdotes'
const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        const addedAnecdote = await anecdoteService.createAnecdote(anecdote)
        console.log(addedAnecdote)
        dispatch(newAnecdote(addedAnecdote))
        dispatch(setNotification(`New anecdote ${anecdote} added`))
        setTimeout(() => {
            dispatch(setNotification(null))
        },5000)
      }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote"/></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm