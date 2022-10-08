import * as React from 'react'
import Button from '@mui/material/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { render } from 'react-dom'


function App(){
  return (
    <>
        <Header></Header>
        <Button variant="contained">Hello World</Button>
        <Footer></Footer>
    </>
  )
}

export default App