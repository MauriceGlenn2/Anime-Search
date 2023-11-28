import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      
      <div className='logo__container'>
        <img src="" alt="" />
        <Link to={`/`}><h1>Anime Explorer</h1></Link>
      </div>
      <div>
        <ul className='links'>
          <a href=""><li className='link__list'>About Us</li></a>
          <a href=""><li className='link__list'>Blog</li></a>
          <li className='link__list login__btn'>Log In</li>
          <li className='link__list signup__btn'>Sign up</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav