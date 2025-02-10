import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import VideoBackground from '../../components/VideoBackground/VideoBackground'
import MultiEvent from '../../components/multiEvent/MultiEvent'
import MultiEvent2 from '../../components/MultiEvent/MultiEvent2'
import MultiEvent3 from '../../components/MultiEvent/MultiEvent3'
import MultiEvent4 from '../../components/MultiEvent/MultiEvent4'

import Footer from '../../components/Footer/Footer'

import { Link } from'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <VideoBackground/>
     <div> <About/> </div>
     <MultiEvent/>
     <MultiEvent2/>
     <MultiEvent3/>
     <MultiEvent4/>
     <div className="button-container">
  <div>
  <Link to="/services">
    <button>
      Explore More Events <img src="frontend/sunrise-event-app/src/assets/white-arrow.png" alt="" />
    </button>
  </Link>
  </div>

</div>
<Footer />
    </div>
  )
}

export default Home
