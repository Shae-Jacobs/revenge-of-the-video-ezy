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
      
      <button type="submit" className="button">Add Review</button>
    </form>







    </>
  )
}

export default AddReview