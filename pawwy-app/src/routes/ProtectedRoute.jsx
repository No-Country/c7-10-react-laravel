import { useUser } from '../hooks/useUser'
import { Navigate } from 'react-router-dom'

const accessToken = localStorage.getItem('access_token')

export const ProtectedRoute = ({ children }) => {
  const { user } = useUser()

  if (user.status && accessToken) {
    return <Navigate to="/" replace />
  }

  return children
}
