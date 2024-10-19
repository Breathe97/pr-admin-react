import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </React.Fragment>
  )
}

export default Layout
