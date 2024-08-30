import { useQuery } from "@tanstack/react-query";
import { getMoviesById } from "../apis/movies";



export function useMovieById(id:string){
  const query = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMoviesById(id)
  })
  return {...query}
}