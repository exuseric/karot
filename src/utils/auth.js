import auth0 from 'auth0-js'
import { navigate } from 'gatsby'

// Check if the environment is a browser
const isBrowser = typeof window !== 'undefined'

// Check the origin
const origin = isBrowser && window.location.origin

// The user's information
let user = {}

// The user signed tokens for authorization.
// Set in memory to avoid XSS
const tokens = {
  accessToken: false,
  idToken: false
}

// Implement auth0 only if the environment is a browser otherwise return an empty object
const auth = isBrowser
  ? new auth0.WebAuth({
      domain: 'karot.us.auth0.com',
      clientID: 'bTTtU3RRVZAkQGTkx6VPDhYSi2nccfR6',
      redirectUri: `${origin}/account`,
      responseType: 'token id_token',
      scope: 'openid profile email'
    })
  : {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return JSON.parse(localStorage.getItem('isLoggedIn')) === 'true'
}

export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    navigate('/')
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    localStorage.setItem('isLoggedIn', JSON.stringify(true))
    navigate('/account')
    cb()
  }
}

export const silentAuth = (callback) => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}

export const logout = () => {
  localStorage.setItem('isLoggedIn', JSON.stringify(false))
  auth.logout()
}
