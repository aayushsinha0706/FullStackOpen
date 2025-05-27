import { useGetAnecdotes, useVoteAnecdote } from './query'

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {

  const { data, status } = useGetAnecdotes()
  const voteMutation = useVoteAnecdote()

  if (status === 'pending') {
    return <div>loading data....</div>
  }

  if(status === 'error') {
    return <div> anecdote service is not available due to problems in server</div>
  }

  const anecdotes = data

  const handleVote = (anecdote) => {
    voteMutation.mutate({
      ...anecdote,
      votes: anecdote.votes + 1
    })
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
