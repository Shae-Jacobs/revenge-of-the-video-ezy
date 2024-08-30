import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export const LoginButton = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0()

  const handleSignOut = () => {
    logout()
  }
  const handleSignIn = () => {
    loginWithRedirect()
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <IfAuthenticated>
        <button onClick={handleSignOut}>Sign out</button>
        {user && <p>{user.name}</p>}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign in</button>
      </IfNotAuthenticated>
    </>
  )
}

//Need to consider:
//1) Login with redirect
//2) Return to page -
//3) logout
//4) Add to layout <LoginButton>
