import { Link } from "react-router-dom"

function Header() {

  return (
    <>
    <h1>Return of the Video Ezy</h1>
    <div className="header-container">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
    </>
  )
}

export default Header