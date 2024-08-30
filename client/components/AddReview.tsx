import { useParams, useNavigate } from "react-router-dom"
import useAddReview from "../hooks/useAddReview"
import { ChangeEvent, FormEvent, useState } from "react"

function AddReview() {

  const {id: movieId} = useParams()
  
  const [formValues, setFormValues] = useState({
    movieId: Number(movieId),
    movieRating: 4,
    reviewerName: "Anonymous",
    reviewText: "Enter your review here",
  })

  const addReview = useAddReview()
  const navigate = useNavigate()

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    addReview.mutate(formValues)
    navigate(`/movies/${movieId}`)
  }

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget
    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const onRadioChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const rating = Number(evt.currentTarget.value)
    setFormValues((previous) => ({
      ...previous,
      movieRating: rating
    }))      
  }

  return (
    <>
    <h2>Review Form</h2>
    <form className="form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="reviewerName">Name: </label>
        <input 
          type="text"
          name="reviewerName"
          id="reviewerName"
          value={formValues.reviewerName}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="reviewText">Review: </label>
        <input 
          type="text"
          name="reviewText"
          id="reviewText"
          value={formValues.reviewText}
          onChange={onChange}
        />
      </div>
      <div>
        <fieldset>
          <legend>Rate this movie</legend>
          <label htmlFor="1">1</label>
          <input id="1" type="radio" name="rating" value={1} onChange={onRadioChange}/>
          <label htmlFor="2">2</label>
          <input id="2" type="radio" name="rating" value={2} onChange={onRadioChange}/>
          <label htmlFor="3">3</label>
          <input id="3" type="radio" name="rating" value={3} onChange={onRadioChange}/>
          <label htmlFor="4">4</label>
          <input id="4" type="radio" name="rating" value={4} onChange={onRadioChange}/>
          <label htmlFor="5">5</label>
          <input id="5" type="radio" name="rating" value={5} onChange={onRadioChange}/>
        </fieldset>
      </div>
      
      <button type="submit" className="button">Add Review</button>
    </form>







    </>
  )
}

export default AddReview