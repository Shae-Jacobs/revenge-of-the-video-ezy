import { useQuery } from '@tanstack/react-query'
import { getReviews } from '../apis/movies'

export default function useReviews(moiveId: string) {
  const query = useQuery({
    queryKey: ['reviews'],
    queryFn: () => getReviews(moiveId),
  })
  return query
}
