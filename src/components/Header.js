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
            <ul>
              <li><Link className={headerStyles.navLink}>About</Link></li>
              <li><Link className={headerStyles.navLink}>Values</Link></li>
              <li><Link className={headerStyles.navLink}>Team</Link></li>
              <li><Link className={headerStyles.navLink}>Programs</Link></li>
              <li><Link className={headerStyles.navLink}>News</Link>
                <ul>
                  <li><Link>Student Profiles</Link></li>
                </ul>
              </li>
              <li><Link className={headerStyles.navLink}>Get Involved</Link>
                <ul>
                  <li><Link>Mentors</Link></li>
                  <li><Link>Coaching</Link></li>
                  <li><Link>Donate</Link></li>
                </ul>
              </li>
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