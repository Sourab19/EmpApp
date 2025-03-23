import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1,width: "100%"  }} >
      <AppBar position="static" sx={{ width: "100%" ,backgroundColor:"rgb(142, 213, 142)"}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography>
          <Link to={'/'} ><Button color="inherit" style={{color:'white'}}>Home</Button></Link>
          <Link to={'/form'} ><Button  color="inherit" style={{color:'white'}}>Employee Form</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
