import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import { AppContent } from '../../context/AppContext'
import { useContext } from 'react'

const Home = () => {
  const  {userData}=useContext(AppContent)
  return (
    <div>
      <Navbar/>
     <div> <About/> </div>
    </div>
  )
}

export default Home
