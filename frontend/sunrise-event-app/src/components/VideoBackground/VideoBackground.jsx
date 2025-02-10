import React from 'react'
import backgroundVideo from '../../assets/backgroundvideo.mp4';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className='video '>
      <video src={backgroundVideo} autoPlay loop muted></video>
    </div>
  )
}

export default VideoBackground
