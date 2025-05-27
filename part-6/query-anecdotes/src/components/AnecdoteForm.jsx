import { useCreateAnecdote } from "../query"

const AnecdoteForm = () => {

  const createMutation = useCreateAnecdote()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    if (content.length >= 5){
      createMutation.mutate({
        content,
        votes: 0
      })
    }
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
