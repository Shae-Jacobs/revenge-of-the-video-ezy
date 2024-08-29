export interface Review extends ReviewData {
  id: number
}

export interface Movie {
  id: number
  title: string
  year: number
  genre: string
  posterUrl: string
}

export interface ReviewData {
  movieId: number
  movieRating: number
  reviewerName: string
  reviewText: string
}
