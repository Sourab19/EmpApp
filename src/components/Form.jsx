import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';

const Form = () => {
  return (
    <div>
    <Box sx={{ 
    width: "80%", 
    height: 500, 
    bgcolor: "white", 
    boxShadow: 3, 
    borderRadius: 2,
    padding:1,
    marginLeft:"120px",
    marginTop:"60px" 
  }}>
    <Grid container spacing={2} style={{width:"80%",marginTop:"100px",marginLeft:"100px"}}>
    <Grid item size={12}>
     <Typography variant='h4'style={{color:'darkgreen',textAlign:'center'}}>Employee Form</Typography>
     <br />
     </Grid>

      <Grid item size={6}>
      <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
      <br /><br />
      </Grid>
      <Grid item size={6}>
      <TextField fullWidth id="outlined-basic" label="Designation" variant="outlined" />
      <br /><br />
      </Grid>
      <Grid item size={6}>
      <TextField fullWidth id="outlined-basic" label="Location" variant="outlined" />
      <br /><br />
      </Grid>
      <Grid item size={6}>
      <TextField fullWidth id="outlined-basic" label="Salary" variant="outlined" />
      <br /><br />
      </Grid>
      <Grid item size={12} style={{ display: "flex", justifyContent: "center" }}>
      <Button variant="contained" color='success'style={{alignItems:'flex-end'}} >Submit</Button>
      </Grid>
      </Grid>
      </Box>
    </div>
  )
}

export default Form
