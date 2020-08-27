import React from 'react'
import { Link } from 'gatsby'
import logo from  '../images/agoge_white.png'
import headerStyles from './header.module.css'
import { FaBars } from 'react-icons/fa'

const menuLinks = [
  {
    name: 'About',
    link: '/about',
    sublinks: [
      {
        name: 'Our Team',
        link: '/team',
        sublinks: []
      },
      {
        name: 'Our Board',
        link: '/board',
        sublinks: []
      },
      {
        name: 'Values',
        link: '/values',
        sublinks: []
      },
    ]
  },
  {
    name: 'Programs',
    link: '/programs',
    sublinks: []
  },
  {
    name: 'News',
    link: '/news',
    sublinks: []
  },
  {
    name: 'Get Involved',
    link: '/involvement',
    sublinks: []
  },
  {
    name: 'Contact Us',
    link: '/contact',
    sublinks: []
  }
]

function Navigation({ burgerClick }) {
  return(
    <React.Fragment>
      <nav className={headerStyles.desktopNav}>
        <ul>
          { menuLinks.map((navLink, index) => {
            return !navLink.sublinks.length 
            ? <Link tabIndex={index + 1} className={headerStyles.navLink} to={navLink.link}><li>{navLink.name}</li></Link>
            : <div><Link tabIndex={index + 1} className={headerStyles.navLink} to={navLink.link}><li>{navLink.name}</li></Link>
              <ul>
              {navLink.sublinks.map((subLink) => {
                return( <Link to={subLink.link}><li>{subLink.name}</li></Link>)
              })}
            </ul></div>
          })
          }
        </ul>
      </nav>
      <div className={headerStyles.nav_donate}>
        <a tabIndex='7' className={headerStyles.donateBtn} href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KPCSJHZA6URES&source=url'>Donate</a>
      </div>
      <div className={headerStyles.burgerMenu}>
        <FaBars onClick={burgerClick} />
      </div>
    </React.Fragment>
  )
}

function MobileNav({ mobileMenuStyle }) {
  return(
    <nav className={`${mobileMenuStyle} ${headerStyles.mobileNav}`}>
      <ul>
        { menuLinks.map((navLink, index) => {
          return !navLink.sublinks.length 
          ? <Link tabIndex={index + 1} className={headerStyles.mobileNavLink} to={navLink.link}><li>{navLink.name}</li></Link>
          : <div><Link tabIndex={index + 1} className={headerStyles.mobileNavLink} to={navLink.link}><li>{navLink.name}</li></Link>
            <ul className={headerStyles.subMobileNav}>
            {navLink.sublinks.map((subLink) => {
              return(<Link to={subLink.link}><li>{subLink.name}</li></Link>)
            })}
          </ul>
          </div>
        })
        }
      </ul>
    </nav>
  )
}

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      navbarOpen: false,
      mobileMenuCss: headerStyles.hideMobileMenu
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu () {
    this.state.navbarOpen
      ? this.setState({
        navbarOpen: false,
        mobileMenuCss: headerStyles.hideMobileMenu
      })
      : this.setState({
        navbarOpen: true,
        mobileMenuCss: headerStyles.showMobileMenu
      })
  }

  render() {
    return(
      <header>
        <div className={headerStyles.globalHeader}>
          <div className={headerStyles.spacebetween}>
            <div id='logo' className={headerStyles.logo}>
              <Link tabIndex='0' to='/' className={headerStyles.logoLink}>
                <img src={logo} alt='Agoge Project Logo'/>
                <span>The Agoge Project</span>
              </Link>
            </div>
            <Navigation burgerClick = {this.toggleMobileMenu} />     
          </div>
        </div>
        <MobileNav mobileMenuStyle = {this.state.mobileMenuCss} />
      </header>
    )
  }

}