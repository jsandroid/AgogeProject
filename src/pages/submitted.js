import React from 'react'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'
import { FaEnvelopeOpenText } from 'react-icons/fa'

export default function Submitted({ location }) {
  var name = ''
  if(typeof window !== 'undefined' && location.state !== null) name = location.state.name.trim()
  return(
    <Layout>
      <div className='content'>
        <div className='contactSubmission'>
          <FaEnvelopeOpenText />
          <h1>Contact Form Submitted!</h1>
          <p>Thanks {name} for reaching out! We'll be in contact within a few days.</p>
        </div>
      </div>
    </Layout>
  )
}