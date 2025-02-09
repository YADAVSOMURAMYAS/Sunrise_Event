import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
const Home = () => {
  return (
    <div>
      <Navbar/>
     <div> <About/> </div>
    </div>
  )
}

export default Home
