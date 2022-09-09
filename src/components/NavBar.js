import React from 'react'
import './NavBar.css'
import logo from '../picture/Logo.png'
import { BsPersonCircle } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'

function Navbar() {
  return (
    <ul className='Nav'>
        <li className='kulony'><img src={logo} width='60%' height='120%' alt="" className='kulony-icon'/></li>
        <li className='home'>HOME</li>
        <li className='my-post'>MY POST</li>
        <li className='request-topic'>REQUEST TOPIC</li>
        <li className='space'> </li>
        <li className='create-new-post'><div class='border-create-post'>Create new post</div></li>
        <li className='bell'><FaRegBell size={25} className='bell-icon'/></li>
        {/* <li className='vector'><img src={vector} width='40px' height='40px' alt=""/></li> */}
        <li className='vector'><BsPersonCircle size={25} className='vector-icon'/></li>
    </ul>
  )
}

export default Navbar