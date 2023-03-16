import { Logout } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useSignOut } from '@nhost/react'
import React from 'react'

const SignOutBtn = () => {
  const { signOut } = useSignOut()

  return (
    <Button onClick={signOut} variant='contained' startIcon={<Logout />}>
      Sign out
    </Button>
  )
}

export default SignOutBtn
