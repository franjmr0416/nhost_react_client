import { Stack } from '@mui/material'
import React from 'react'
import SignOutBtn from '../components/SignOutBtn'

const Home = () => {
  return (
    <Stack direction={'column'} gap={2}>
      <h1>Home</h1>
      <SignOutBtn />
    </Stack>
  )
}

export default Home
