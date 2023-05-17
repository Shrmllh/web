import { useState } from 'react'
import { Box , Textfield , Button } from '@mui/material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', flexGrow:1 
      
        }}
        noValidate
        autoComplete="off"
      >
        <Textfield id="outlined-basic" label="Username" variant="outlined" />
        <Textfield id="outlined-basic" label="Password" variant="outlined" type='password' sx={{ mt:1 }} />
        <Button variant="contained" sx={{ mt: 1 }} >Login</Button>


      </Box>
    </>
  )
}

export default App
