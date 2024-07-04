import React from 'react'
import "./Hero.css"
import { Link } from 'react-scroll'
import me from '../../assets/me1.png'

const Hero = () => {
  return (
    <section id="hero">
      <div className='wrapper info-container'>
        <div className="column">
          <h3 className='sub-title' data-aos="fade-right">Hey.. I am <span className='primary'>Roshan Mandal</span></h3>
          <h1 className='heading-1' data-aos="fade-up">
            A <span className='gradient-text'>FullStack</span> Web Developer
          </h1>
          <p className='muted' data-aos="fade-up" data-aos-delay="200">With expertise in both front-end and back-end technologies, I specialize in crafting seamless, scalable web applications. My skill set enables me to build dynamic, responsive interfaces and secure, efficient server-side solutions that meet diverse client needs.</p>
          <div className='flex-center buttons-wrapper'>
            <Link to='services' smooth={true} className='btn primary' data-aos="fade-left" data-aos-delay="1000" data-aos-offset="50">Learn more</Link>
            <Link to='contact' smooth={true} className='btn' data-aos="fade-left" data-aos-delay="1300" data-aos-offset="50">Get started</Link>
          </div>
        </div>
        <div className="column hero-image" data-aos="fade-left" data-aos-delay="200">
          <img src={me} alt="" />
        </div>
      </div> 
    </section>
  )
}

export default Hero
