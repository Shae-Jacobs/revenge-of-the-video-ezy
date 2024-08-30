import request from 'superagent'
import { ReviewData } from '../../models/movies'

export async function addReview(data: ReviewData){
  const response = await request.post('/api/v1/reviews').send(data)
  console.log(response.statusCode)
  return response
}


