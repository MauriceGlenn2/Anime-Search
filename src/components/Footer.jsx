import React from 'react'

function Footer() {
  return (
      <footer className='footer__container'>
        <div className='footer__wrapper'>
        <h1 className='footer__title'>Anime Explorer</h1>
        <ul className='footer__list'>
            <li className='link__list'>Home</li>
            <li className='link__list'>About Us</li>
            <li className='link__list'>Blog</li>
        </ul>
          <p className="copyright__para">Copyright © Anime Explorer 2023</p>
          </div>
    </footer>
  )
}

export default Footer