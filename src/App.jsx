import { NhostClient, NhostProvider } from '@nhost/react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'

const subdomain = import.meta.env.VITE_REACT_APP_NHOST_SUBDOMAIN
const region = import.meta.env.VITE_REACT_APP_NHOST_REGION

const nhost = new NhostClient({
  subdomain: subdomain,
  region: region,
})

function App() {
  return (
    <NhostProvider nhost={nhost}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </NhostProvider>
  )
}

export default App
