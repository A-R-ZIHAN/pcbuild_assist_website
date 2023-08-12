import { useAuthContext } from './useAuthContext'
import { usePostsContext } from './usePostContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchWorkouts } = usePostsContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchWorkouts({ type: 'SET_POSTS', payload: null })
  }

  return { logout }
}