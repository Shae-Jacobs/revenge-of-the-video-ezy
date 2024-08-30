import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ReviewData } from '../../models/movies.ts'
import { addReview } from '../apis/reviews.ts'

export default function useAddReview() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: ReviewData) => addReview(data),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] })
    },
  })
}
