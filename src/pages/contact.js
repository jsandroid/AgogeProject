import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/Layout'
import * as emailjs from 'emailjs-com'

function Form({fieldHandler, onSubmit}) {
  return (
    <div className='contactForm'>
      <form id='contact-form' onSubmit={onSubmit} method='POST'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            tabIndex='8'
            type='text'
            name='name'
            placeholder='John Doe'
            onChange={(e) => fieldHandler('name', e)}
            required
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email</label>
          <input 
            tabIndex='9'
            type='email'
            name='email'
            placeholder='johndoe@email.com'
            onChange={(e) => fieldHandler('email', e)}
            required
            className='form-control' 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input
            tabIndex='10'
            type='tel'
            name='phone'
            placeholder='443-760-5437'
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={(e) => fieldHandler('phone', e)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            tabIndex='11'
            type='text'
            name='message'
            placeholder='Let us know your thoughts!'
            onChange={(e) => fieldHandler('message', e)}
            required
            className='form-control'
          />
        </div>
        <button tabIndex='12' type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

function ContactMap() {
  return (
    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.571378253131!2d-76.5766524490762!3d39.32063827940703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8044a4e9d6c7d%3A0xaa4ff5b9ab6d0e54!2s3203%20Belair%20Rd%2C%20Baltimore%2C%20MD%2021213!5e0!3m2!1sen!2sus!4v1596476108843!5m2!1sen!2sus' className='googleMap' frameBorder='0' style={{border : 0 }} allowFullScreen='' aria-hidden='false' ></iframe>
  )
}

export default class Contact extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  handleChange(param, event) {
    console.log(this.state)
    this.setState({ [param]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    var { name, email, phone, message } = this.state
    if(phone.length < 1) {
      phone = 'Not Provided'
    }
    
    var template_params = {
      "email": email,
      "name": name,
      "phoneNumber": phone,
      "message": message
    }
    
    var service_id = "agoge";
    var template_id = "agogecontact";
    emailjs.send(service_id, template_id, template_params, 'user_RxNcR4Jx0YpUyzzcSXFTR')
      .then((result) => {
        console.log(result.text);
        this.resetForm()
        navigate(
          '/submitted',
          {
            state: { name }
          }
        )
      }, (error) => {
        alert(`The following error occured: ${error.text}. Please try again or email us directly at agogeproject@gmail.com`)
        console.log(error.text);
      })
  }


  render() {
    return (
      <Layout title='Contact Us'
      description='Please feel free to reach out to The Agoge Project'>
        <div className='content'>
          <h1 className='defaultH1'>Contact Us</h1>
          <div className='contact'>
            <Form 
              fieldHandler= {this.handleChange}
              onSubmit = {this.handleSubmit}
            />
            <ContactMap/>
          </div>
        </div>
      </Layout>
    )
  }
}
