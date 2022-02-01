import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from 'react-animated-slider';
import pic1 from '../images/index/slider_homepage/pic1.jpg'
import pic2 from '../images/index/slider_homepage/pic2.jpg'
import pic3 from '../images/index/slider_homepage/pic3.jpg'
import cardPic1 from '../images/index/indexPrgmCards/pic1.jpg'
import cardPic2 from '../images/index/indexPrgmCards/pic2.jpg'
import cardPic3 from '../images/index/indexPrgmCards/pic3.jpg'
import 'react-animated-slider/build/horizontal.css';
import '../styles/slider.css'
import SEO from '../components/SEO';

const homepageSlider = [
	{
		title: 'BE LIMITLESS',
		description:
			'Learn about our mission and how The Agoge Project got started.',
		button: 'About',
    image: `${pic1}`,
    link: '/about',
  },
  {
		title: '“So that we may always have something to offer”',
		description:
			'We have Boxing, Ju-Jitsu, Health & Nutrition, and Mentoring programs to build up each of our students ',
		button: 'Programs',
    image: `${pic2}`,
    link: '/programs',
  },
  {
		title: 'Agoge Values',
		description:
			'We\'ve outline a number of values we feel are important to share with our students',
		button: 'Values',
    image: `${pic3}`,
    link: '/values',
	},
] 

const programs = [
  {
    text:'Boxing/MMA', 
    img: `${cardPic1}`,
    alt:'Two Agoge Project students sparing',
  },
  {
    text:'Health and Nutrition', 
    img: `${cardPic2}`,
    alt:'Coach Ore leads the Health and Nutrition programs',
  },
  {
    text:'Mentoring', 
    img: `${cardPic3}`,
    alt:'Coach MJ mentors students both on and off the matts',
  }
]

function Schedule () {
  return(
    <table className='scheduleTable'>
      <thead>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>4pm - 5pm</strong><br className='scheduleDataBr'/>Academic Hour</td>
          <td><strong>4pm - 5pm</strong><br className='scheduleDataBr'/>Academic Hour</td>
          <td><strong>4pm - 5pm</strong><br className='scheduleDataBr'/>Academic Hour</td>
          <td><strong>4pm - 5pm</strong><br className='scheduleDataBr'/>Academic Hour</td>
          <td>No Student Programming</td>
          <td><strong>8am - 12pm</strong><br className='scheduleDataBr'/>Open Gym, Mentor Meetings</td>
          <td>No Student Programming</td>
        </tr>
        <tr>
          <td><strong>5pm - 6pm</strong><br className='scheduleDataBr'/>BJJ -  Kids</td>
          <td>
            <strong>Coach Dennis</strong><br className='scheduleDataBr'/>
            <strong>5pm - 6pm</strong><br className='scheduleDataBr'/>BJJ -  Kids
          </td>
          <td>
            <strong>Coach Dennis</strong><br className='scheduleDataBr'/>
            <strong>5pm - 6pm</strong><br className='scheduleDataBr'/>BJJ -  Kids
          </td>
          <td><strong>5pm - 6pm</strong><br className='scheduleDataBr'/>BJJ -  Kids</td>
          <td></td>
          <td>
            <strong>Coach Dennis</strong><br className='scheduleDataBr'/>
            BJJ<br className='scheduleDataBr'/>
            <strong>Coach MJ</strong><br className='scheduleDataBr'/>
            Boxing
          </td>
          <td></td>
        </tr>
        <tr>
          <td><strong>6pm - 7pm</strong><br className='scheduleDataBr'/>BJJ -  Mixed</td>
          <td><strong>6pm - 7pm</strong><br className='scheduleDataBr'/>BJJ -  Mixed</td>
          <td><strong>6pm - 7pm</strong><br className='scheduleDataBr'/>BJJ -  Mixed</td>
          <td><strong>6pm - 7pm</strong><br className='scheduleDataBr'/>BJJ -  Mixed</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><strong>6pm - 7pm</strong><br className='scheduleDataBr'/>Boxing -  Kids</td>
          <td><strong>6pm - 7pm</strong><br className='scheduleDataBr'/>Boxing -  Kids</td>
          <td><strong>6pm - 7pm</strong><br className='scheduleDataBr'/>Boxing -  Kids</td>
          <td><strong>6pm - 7pm</strong><br className='scheduleDataBr'/>Boxing -  Kids</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><strong>7pm - 8:30pm</strong><br className='scheduleDataBr'/>Boxing Mixed/Comp Practice</td>
          <td><strong>7pm - 8:30pm</strong><br className='scheduleDataBr'/>Boxing Mixed/Comp Practice</td>
          <td><strong>7pm - 8:30pm</strong><br className='scheduleDataBr'/>Boxing Mixed/Comp Practice</td>
          <td><strong>7pm - 8:30pm</strong><br className='scheduleDataBr'/>Boxing Mixed/Comp Practice</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}
export default function Index() {
  return(
    <>
      <SEO
        title = 'The Agoge Project Homepage'
      />
      <Header />
      <main>
        <Slider autoplay={3000} className='slider-wrapper'>
          {homepageSlider.map((item, index) => (
            <div
              key={index}
              className='slider-content'
              style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7),transparent), url('${item.image}') no-repeat center center` }}
            >
              <div className='inner'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Link to={item.link} className='roundButton'>{item.button}</Link>
              </div>
            </div>
          ))}
        </Slider>
        <div className='bkground1'>
          <div className='content index center visionIndex'>
            <h1>Our Vision</h1>
            <p>
              The Agoge Project's vision is for each and every student who comes through our doors to leave with a skill set to not 
              only become good at whatever they set their minds to, but to cultivate the community around them to be able to do the same.
            </p>
          </div>
          
        </div>
        <div className='bkground2'>
          <div className='content index center'>
            <h1>I Choose</h1>
            <div className='youtubeContainer'>
              <iframe title="Agoge Promo" width="560" height="315" src="https://www.youtube.com/embed/Q_gDf-KC1qA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className='bkground1'>
          <div className='content index center'>
            <h1>Our Programs</h1>
            <div className='pgmCards'>
              {programs.map((program, index)=> (
                <div className='pgmCard'>
                  <div className='pgmImg'><img src={program.img} alt={program.alt}/></div>
                  <div className='pgmText'>{program.text}</div>
                </div>
              ))}
            </div>
            <div className='inner'><Link to='/programs' className='roundButton'>Learn More</Link></div>
          </div>
        </div>
        <div className='bkground2'>
          <div className='content index center'>
            <h1>Schedule</h1>
            <Schedule/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}