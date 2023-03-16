import { Fingerprint } from '@mui/icons-material'
import { TextField, Stack, Button } from '@mui/material'
import { useSignInEmailPassword } from '@nhost/react'
import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    signInEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignInEmailPassword()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    signInEmailPassword(email, password)
  }

  if (isSuccess) {
    return <Navigate to='/home' state={{ from: location }} />
  }

  const disableForm = isLoading || needsEmailVerification

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Stack spacing={4}>
          <TextField
            id='email'
            name='email'
            label='Email'
            variant='standard'
            type={'email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={disableForm}
          />
          <TextField
            id='password'
            name='password'
            label='Password'
            variant='standard'
            type={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={disableForm}
          />
          <Button
            type='submit'
            variant='contained'
            startIcon={<Fingerprint />}
            disabled={disableForm}
          >
            Sign In
          </Button>

          <p>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </p>

          {isError ? <p>{error?.message}</p> : null}
        </Stack>
      </form>
    </div>
  )
}

export default SignInForm
