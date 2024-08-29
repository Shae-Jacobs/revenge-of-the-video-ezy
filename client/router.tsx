/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Layout from './components/Layout'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import AddReview from './components/AddReview'

const router = createBrowserRouter(
  createRoutesFromElements([
  <Route path="/" element={<Layout />}> 
    <Route index element={<Movies/>}/>
    <Route path="/movies/:id" element={<MovieDetails/>}/>
    <Route path="/movies/:id/review" element={<AddReview/>}/>
  </Route>])
)

export default router
