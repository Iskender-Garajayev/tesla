import React from 'react'
import { useState } from 'react'

const Header = () => {

  const [active, setActive] = useState(false)

  const handleClick = event =>{
    setActive(current => !current)
  }

  return (
    <div className='header'> 
      <div className="header-container">

      <div className="header-logo">
      <a aria-label="Tesla Logo" class="tds-site-logo-link" href="/"><svg class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg><span class="tds--is_visually_hidden"></span></a>
      </div>


      <div className="header-navbar">
        <ul>
          <li>model s</li>
          <li>model 3</li>
          <li>model x</li>
          <li>model y</li>
          <li>solar roof</li>
          <li>solar panels</li>
          <li>powerwall</li>
        </ul>
      </div>
      <div className="header-user">
        <ul>
          <li>shop</li>
          <li>account</li>
          <li onClick={handleClick } >menu</li>
        </ul>
      </div>
      </div>

      <div className={active ? 'sidebar active': 'sidebar' }>
        <ul>
          <li onClick={handleClick }>existing inventory</li>
          <li>used inventory</li>
          <li>trade-in</li>
          <li>demo drive</li>
          <li>insurance</li>
          <li>cybertruck</li>
          <li>roadster</li>
          <li>semi</li>
          <li>charging</li>
          <li>commercial energy</li>
          <li>utilities</li>
          <li>find us</li>
          <li>support</li>
          <li>investor relations</li>
        </ul>
      </div>
    </div>
  )
}

export default Header