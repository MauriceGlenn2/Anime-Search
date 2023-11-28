import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  function openMenu(){
    document.body.classList += ' menu--open'
  }

  function closeMenu(){
    document.body.classList.remove('menu--open')
  }

  return (
    <nav>
      
      <div className='logo__container'>
        <Link to={`/`}><h1>Anime Explorer</h1></Link>
      </div>
      <div>
        <ul className='links'>
          <a href=""><li className='link__list'>About Us</li></a>
          <a href=""><li className='link__list'>Blog</li></a>
          <li className='link__list login__btn'>Log In</li>
          <li className='link__list signup__btn'>Sign up</li>
          <button className='btn__menu' onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
        <div className="menu__backdrop">
          <button className='btn__menu btn__menu--close' onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className='menu__links'>
            <li className="menu__list">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="menu__list">
              <Link to={`/`}>About</Link>
            </li>
            <li className="menu__list">
              <Link to={`/`}>Log-In</Link>
            </li>
            <li className="menu__list">
              <Link to={`/`}>Sign-up</Link>
            </li>
            
            

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav