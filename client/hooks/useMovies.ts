import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../apis/movies";

export default function useMovies(){
  const query = useQuery({
    queryKey: ['movies'],
    queryFn: getAllMovies
  })
  return {...query}
}