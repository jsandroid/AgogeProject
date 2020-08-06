import React from 'react'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'
import pic1 from '../images/donate/pic1.jpg'

const dollarValues = [
   {
    Value : '$10',
    Link: 'https://www.paypal.me/TheAgogeProject/10'
  },
  {
    Value : '$25',
    Link: 'https://www.paypal.me/TheAgogeProject/25'
  },
  {
    Value : '$50',
    Link: 'https://www.paypal.me/TheAgogeProject/50'
  },
  {
    Value : '$250',
    Link: 'https://www.paypal.me/TheAgogeProject/250'
  },
  {
    Value :'$500',
    Link: 'https://www.paypal.me/TheAgogeProject/500'
  }, 
  {
    Value : 'Other',
    Link: 'https://www.paypal.me/TheAgogeProject'
  }
]

function DonateBox({name, link}) {
  console.log(name)
  console.log(typeof name)
  return (
    <a className='donateBox' href={link}><li>{name}</li></a>
  )
}
DonateBox.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

function DonateBoxes({donations}) {
  return (
    <div className='donationBoxes'>
      <ul>
        {donations.map((donation) => (
          <DonateBox name={donation.Value} link={donation.Link}/>
        ))}
      </ul>
    </div>
  )
}

DonateBoxes.propTypes = {
  donations: PropTypes.array.isRequired
}

export default function Donate() {
  return (
    <Layout>
      <div style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7),transparent), url('${pic1}') no-repeat`, backgroundPosition : '5% 30%', backgroundSize: 'cover'}}>
        <div className='content' style={{backgroundColor: 'rgba(217, 217, 217, 0.5)', height: '700px'}}>
          <div>
            <DonateBoxes donations={dollarValues} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
