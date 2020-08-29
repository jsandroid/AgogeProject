import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import { FaExclamationTriangle } from 'react-icons/fa'


export default function Error404() {
  return (
    <Layout title='404 - Page Not Found'
    description='Sorry, The Agoge Project page you are looking for cannot be found'> 
      <div className='content'>
        <div className='error'>
            <FaExclamationTriangle />
            <p>
              Sorry, The Agoge Project page you are looking for cannot be found. Please let 
              us know if you think this 404 page was found in error by reaching out to 
              us on our <Link to='/contact'>contact page</Link>.
            </p>
        </div>
      </div>
    </Layout>
  )
}