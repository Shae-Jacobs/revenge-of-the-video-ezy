import request from "superagent";
import { Movie } from "../../models/movies";

export async function getAllMovies(){
  const res = await request.get('/api/v1/movies')  
  return res.body as Movie[]
}

export async function getMoviesById(id:string){
  const res = await request.get(`/api/v1/movies/${id}`)  
  return res.body as Movie
}

