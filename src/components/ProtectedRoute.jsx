import { useAuthenticationStatus } from '@nhost/react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()
  const location = useLocation()

  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to='/' state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute
