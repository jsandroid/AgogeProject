import React from 'react'
import { Link } from 'gatsby'
import footerStyles from './footer.module.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return(
    <footer>
      <div className={footerStyles.Row}>
        <div className={footerStyles.Section}>
          <h1>About</h1>
          <span>The Agoge Project is focued on using Mixed Martial Arts as a vehicle to cultivate self-empowerment, discipline, academic excellence, and a sense of community in our youth.</span>
        </div>
        <div className={footerStyles.Section}>
          <h1>Address</h1>
          <span>
            <div className={footerStyles.SubsectionTitle}>The Agoge Project Gym</div>
            3203 Belair Rd <br/>Baltimore, MD 21213
          </span>
          
        </div>
        <div className={footerStyles.Section}>
          <h1>Contact</h1>
          <span className={footerStyles.Subsection}>
            <div className={footerStyles.SubsectionTitle}>The Agoge Project Gym</div>
            443-760-5437
            <br/><a href="mailto:info@theagogeproject.org">info@theagogeproject.org</a>
          </span>
        </div>
        <div className={footerStyles.Section}>
          <h1>Connect</h1>
          <span className={footerStyles.Subsection}>
            <div className={footerStyles.SocialMedia}>
              <FaFacebookSquare/>
              <FaInstagramSquare/>
              <FaTwitterSquare/>
            </div>
          </span>
        </div>
      </div>
      <div className={footerStyles.Copywrite}>
        <div className={footerStyles.CopywriteCenter}>
          <div>
            <p>&copy; {new Date().getFullYear()} Copyright The Agoge Project</p>
          </div>
          <div>
            <p>Website created by <a href="mailto:jsandroid@gmail.com">Jonathan Sanchez</a></p>
          </div>
        </div>
        
      </div>
    </footer>
  )
}