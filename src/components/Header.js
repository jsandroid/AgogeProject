import React from 'react'
import { Link } from 'gatsby'
import logo from  '../images/agoge_white.png'
import headerStyles from './header.module.css'

function Navigation() {
  return(
    <nav>
      <ul>
        <li><Link className={headerStyles.navLink} to='/about'>About</Link>
          <ul>
            <li><Link to='/team'>Our Team</Link></li>
            <li><Link to='/team'>Our Board</Link></li>
            <li><Link to='/values'>Values</Link></li>
          </ul>
        </li>
        <li><Link className={headerStyles.navLink} to='/programs'>Programs</Link></li>
        <li>
          <Link className={headerStyles.navLink} to='/'>News</Link>
          <ul>
            <li><Link to='/students'>Student Profiles</Link></li>
          </ul>
        </li>
        <li><Link className={headerStyles.navLink} to='/'>Get Involved</Link></li>
        <li><Link className={headerStyles.navLink} to='/contact'>Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default function Header() {
  return(
    <header>
      <div className={headerStyles.globalHeader}>
        <div className={headerStyles.spacebetween}>
          <div id='logo' className={headerStyles.logo}>
            <Link to='/' className={headerStyles.logoLink}>
              <img src={logo} alt='Agoge Project Logo'/>
              <span>The Agoge Project</span>
            </Link>
          </div>
            <Navigation />
          <div className={headerStyles.nav_donate}>
            <Link className={headerStyles.donateBtn} to='/'>Donate</Link>
          </div>
          
        </div>
      </div>
    </header>
  )

}