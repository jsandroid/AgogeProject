import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from 'react-animated-slider';
import pic1 from '../images/slider_homepage/pic1.jpg'
import pic2 from '../images/slider_homepage/pic2.jpg'
import pic3 from '../images/slider_homepage/pic3.jpg'
import 'react-animated-slider/build/horizontal.css';
import '../styles/slider.css'

const homepageSlider = [
	{
		title: 'BE LIMITLESS',
		description:
			'Learn about our mission and how The Agoge Project got started.',
		button: 'About',
    image: `${pic1}`,
  },
  {
		title: '“So that we may always have something to offer”',
		description:
			'We offer Boxing, Ju-Jitsu, Health & Nutrition, and Mentoring programs to build up each of our students ',
		button: 'Programs',
    image: `${pic2}`,
  },
  {
		title: 'Agoge Values',
		description:
			'We\'ve outline a number of values we feel are important to share with our students',
		button: 'Values',
    image: `${pic3}`,
	},
] 

export default function Index() {
  console.log({pic1})
  return(
    <>
      <Header />
      <main>
        <Slider autoplay={3000} className='slider-wrapper'>
          {homepageSlider.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `linear-gradient(rgba(0, 0, 0, 0.6),transparent), url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
            </div>
          ))}
        </Slider>
        <div className='bkground1'>
          <div className='content'>
            <h1>Hello Agoge Project!</h1>
          </div>
          
        </div>
        <div className='bkground2'>
          <div className='content'>
            <h1>Jonathan is here!</h1>
          </div>
        </div>
        <div className='bkground1'>
          <div className='content'>
            <h1>Hello Agoge Project!</h1>
          </div>
        </div>
        <div className='bkground2'>
          <div className='content'>
            <h1>Jonathan is here!</h1>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}