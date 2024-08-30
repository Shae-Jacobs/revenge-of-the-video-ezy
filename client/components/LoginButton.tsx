import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export const LoginButton = () => {
  const { loginWithRedirect, logout } = useAuth0()

  // isAuthenticated (
  //   <button onClick={

  //LOGOUT - In handleSignOut we'll call logout
  const handleSignOut = () => {
    //console.log('sign out')
    logout()
  }
  //LOGINWITHREDIRECT - In handleSignIn, we'll call loginWithRedirect
  const handleSignIn = () => {
    //console.log('sign in')
    loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <button onClick={handleSignOut}>Sign out</button>
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
