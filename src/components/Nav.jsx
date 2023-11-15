import React from 'react'

function Nav() {
  return (
    <nav>
      
      <div className='logo__container'>
        <img src="" alt="" />
        <h1>Anime Explorer</h1>
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