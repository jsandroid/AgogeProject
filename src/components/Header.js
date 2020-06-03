import React from 'react'
import { Link } from 'gatsby'
import logo from  '../images/agoge_white.png'
import headerStyles from './header.module.css'

export default function Header() {
  return(
    <header>
      <div className={headerStyles.globalHeader}>
        <div className={headerStyles.spacebetween}>
          <div id='logo' className={headerStyles.logo}>
            <Link to='/' className={headerStyles.logoLink}>
              <img src={logo} alt='Agoge Project Logo'/>
              <span>Agoge Project</span>
            </Link>
          </div>
          <nav>
            <Link className={headerStyles.navLink}>About</Link>
            <Link className={headerStyles.navLink}>Values</Link>
            <Link className={headerStyles.navLink}>Team</Link>
            <Link className={headerStyles.navLink}>Programs</Link>
            <ul className={headerStyles.navLink}>News
              <Link><li>Student Profiles</li></Link>
            </ul>
            <ul className={headerStyles.navLink}>Get Involved
              <Link><li>Mentors</li></Link>
              <Link><li>Coaching</li></Link>
              <Link><li>Donate</li></Link>
            </ul>
          </nav>
          <div className={headerStyles.nav_donate}>
            <Link className={headerStyles.donateBtn}>Donate</Link>
          </div>
          
        </div>
      </div>
    </header>
  )
}