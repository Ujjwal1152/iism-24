import React from 'react'
import videoBg from './images/mainbackground.mp4'
import './videoloader.css'
import logo from './images/INTER-IIT SPORTS MEET 2024_transparent.png'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <img src={logo} alt="logo" className="logo"/>
        </div>
    </div>
  )
}

export default Main;