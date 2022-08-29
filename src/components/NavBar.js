import React from 'react'
import './NavBar.css'
import bell from '../picture/Colorbell.png'
import vector from '../picture/Vector.png'
import logo from '../picture/Logo.png'

function Navbar() {
  return (
    <ul className='Nav'>
        <li className='kulony'><img src={logo} width='70%' height='60%'/></li>
        <li className='home'>HOME</li>
        <li className='my-post'>MY POST</li>
        <li className='request-topic'>REQUEST TOPIC</li>
        <li className='space'></li>
        <li className='create-new-post'><div class='border-create-post'>Create new post</div></li>
        <li className='bell'><img src={bell} width='20px' height='25px'/></li>
        <li className='vector'><img src={vector} width='40px' height='40px'/></li>
    </ul>
  )
}

export default Navbar