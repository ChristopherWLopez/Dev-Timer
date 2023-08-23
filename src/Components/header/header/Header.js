import { Typography } from '@mui/material'
import React from 'react'
import NavBar from '../nav/NavBar'

export default function Header() {
  return (
    <div>
      <Typography
        role="header"
        variant='h4'
        noWrap
        component="a"
        sx={{
          mt: 2,
          mr: 2,
          fontFamily:"monospace"

        }}
      >
      <h1>Welcome to the Dev Buddy!</h1>
      </Typography>
      <NavBar/>
    </div>
  )
}
