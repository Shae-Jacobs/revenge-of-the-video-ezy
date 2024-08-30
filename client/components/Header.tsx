import { Link } from 'react-router-dom'
import { LoginButton } from './LoginButton'

function Header() {
  return (
    <>
      <h1>Return of the Video Ezy</h1>
      <div className="header-container">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <LoginButton />
        </div>
      </div>
    </>
  )
}

export default Header
