import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import { getAnecdotes,updateAnecdotes, postAnecdotes } from "./requests"

//get operation
export const useGetAnecdotes = () => {
  return useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1
})
}

//put operation
export const useVoteAnecdote = () => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateAnecdotes,
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      const updatedAnecdotes = anecdotes.map(anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote)
      queryClient.setQueryData(['anecdotes'], updatedAnecdotes)
    }
  })
}



// post operation
export const useCreateAnecdote = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postAnecdotes,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
    }
  })

}