import React from 'react'
import { Link } from 'gatsby'
import logo from  '../images/agoge_white.png'
import headerStyles from './header.module.css'

function Navigation({subStyles, subMenuBehavior}) {
  return(
    <nav>
      <ul>
        <li onMouseEnter={() => subMenuBehavior(null)}><Link className={headerStyles.navLink} to='/'>About</Link></li>
        <li onMouseEnter={() => subMenuBehavior(null)}><Link className={headerStyles.navLink} to='/'>Values</Link></li>
        <li onMouseEnter={() => subMenuBehavior(null)}><Link className={headerStyles.navLink} to='/'>Team</Link></li>
        <li onMouseEnter={() => subMenuBehavior(null)}><Link className={headerStyles.navLink} to='/'>Programs</Link></li>
        <li onMouseEnter={() => subMenuBehavior('News')}>
          <Link className={headerStyles.navLink} to='/'>News</Link>
          <ul className={subStyles.News} onMouseLeave={() => subMenuBehavior(null)}>
            <li><Link to='/'>Student Profiles</Link></li>
          </ul>
        </li>
        <li onMouseEnter={() => subMenuBehavior('Involvement')}>
          <Link className={headerStyles.navLink} to='/'>Get Involved</Link>
          <ul className={subStyles.Involvement} onMouseLeave={() => subMenuBehavior(null)}>
            <li><Link to='/'>Mentoring</Link></li>
            <li><Link to='/'>Coaching</Link></li>
            <li><Link to='/'>Donate</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSubMenu: null,
      submenuStyles : {
        News: headerStyles.hide,
        Involvement: headerStyles.hide
      }
    }
    this.toggleSubMenu = this.toggleSubMenu.bind(this)
    
  }
  
  toggleSubMenu(subMenu) {
    if(subMenu === 'Involvement') {
      this.setState({
        activeSubMenu: subMenu,
        submenuStyles : {
          News: headerStyles.hide,
          Involvement: headerStyles.show
        }
      })
    } else if(subMenu === 'News') {
      this.setState({
        activeSubMenu: subMenu,
        submenuStyles : {
          News: headerStyles.show,
          Involvement: headerStyles.hide
        }
      })
    } else {
      this.setState({
        activeSubMenu: null,
        submenuStyles : {
          News: headerStyles.hide,
          Involvement: headerStyles.hide
        }
      })
    }
  }


  render() {
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
              <Navigation subStyles={this.state.submenuStyles} subMenuBehavior={this.toggleSubMenu}/>
            <div className={headerStyles.nav_donate}>
              <Link className={headerStyles.donateBtn} to='/'>Donate</Link>
            </div>
            
          </div>
        </div>
      </header>
    )
  }
}