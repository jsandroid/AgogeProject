import React from 'react'
import Layout from '../components/Layout'

function Form(name, email, message, nameHandler, emailHandler, messageHandler, submitHandler) {
  return (
    <div className='contactForm'>
      <form id="contact-form" onSubmit={submitHandler} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

function ContactMap() {
  return (
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.571378253131!2d-76.5766524490762!3d39.32063827940703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8044a4e9d6c7d%3A0xaa4ff5b9ab6d0e54!2s3203%20Belair%20Rd%2C%20Baltimore%2C%20MD%2021213!5e0!3m2!1sen!2sus!4v1596476108843!5m2!1sen!2sus" className='googleMap' frameBorder="0" style={{border : 0 }} allowFullScreen="" aria-hidden="false" ></iframe>
  )
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

render() {
 return(
   <Layout>
     <div className='content'>
      <h1 className='defaultH1'>Contact Us</h1>
      <div className='contact'>
        <Form
          name = {this.state.name}
          email = {this.state.email}
          message = {this.state.message}
          nameHandler = {this.onNameChange}
          emailHandler = {this.onEmailChange}
          messageHandler = {this.onMessageChange}
          submitHandler= {this.handleSubmit}
        />
        <ContactMap/>
      </div>
    </div>
   </Layout>
 );
}

  onNameChange(event) {
    this.setState({name: event.target.value})
    console.log('updated state in onNameChange')
    console.log(this.state)
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
    console.log('updated state in onEmailChange')
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
    console.log('updated state in onMessageChange')
    console.log(this.state)
  }

handleSubmit(event) {
}
}

export default Contact;