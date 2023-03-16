import { useState } from 'react'
import { useSignUpEmailPassword } from '@nhost/react'
import { Link, Navigate } from 'react-router-dom'
import { TextField } from '@mui/material'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    signUpEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignUpEmailPassword()

  const handleOnSubmit = (e) => {
    e.preventDefault()

    signUpEmailPassword(email, password, {
      displayName: `${firstName} ${lastName}`.trim(),
      metadata: {
        firstName,
        lastName,
      },
    })
  }

  if (isSuccess) {
    return <Navigate to='/' replace={true} />
  }

  const disableForm = isLoading || needsEmailVerification

  return (
    <div>
      <div>
        <div>
          <img src={''} alt='logo' />
        </div>

        {needsEmailVerification ? (
          <p>
            Please check your mailbox and follow the verification link to verify
            your email.
          </p>
        ) : (
          <form onSubmit={handleOnSubmit}>
            <div>
              <TextField
                id='first_name'
                name='first_name'
                label='First name'
                variant='standard'
                type={'text'}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                disabled={disableForm}
              />
              <TextField
                id='last_name'
                name='last_name'
                label='Last name'
                variant='standard'
                type={'text'}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                disabled={disableForm}
              />
            </div>

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

            <button type='submit' disabled={disableForm}>
              {isLoading ? <p>loading...</p> : 'Create account'}
            </button>

            {isError ? <p>{error?.message}</p> : null}
          </form>
        )}
      </div>

      <p>
        Already have an account? <Link to='/'>Sign in</Link>
      </p>
    </div>
  )
}

export default SignUp
