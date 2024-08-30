import { useQuery } from '@tanstack/react-query'
import { getAllReviews } from '../apis/movies'

// export default function useReviews(movieId: string) {
//   const query = useQuery({
//     queryKey: ['reviews'],
//     queryFn: getAllReviews,
//   })

//   const reviews = query.data?.filter(
//     (review) => review.movieId == Number(movieId),
//   )

//   return {
//     isPending: query.isPending,
//     isError: query.isError,
//     error: query.error,
//     data: reviews,
//   }
// }
export default function useReviews() {
  const query = useQuery({
    queryKey: ['reviews'],
    queryFn: getAllReviews,
  })
  return query
}
