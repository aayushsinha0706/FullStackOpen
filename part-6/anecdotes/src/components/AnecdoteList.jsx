import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    
    const anecdotes = useSelector(state => {
        if (state.filter === ''){
            return state.anecdotes.toSorted((a,b) => b.votes - a.votes )
        } else {
            return( 
                state.anecdotes
                    .filter(anecdote => anecdote.content.includes(state.filter))
                    .toSorted((a,b) => b.votes - a.votes)
            )
        }

    })

    const anecdoteList = useSelector(state => state.anecdotes)

    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteAnecdote(id))
        const votedAnecdote = anecdoteList.find(a => a.id === id)
        dispatch(setNotification(`You voted ${votedAnecdote.content}`))
        setTimeout(() => {
            dispatch(setNotification(null))
        },5000)
        console.log('vote', id)
    }

    return(
        <>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList