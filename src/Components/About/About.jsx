import React from 'react'
import "./About.css"
import {whyChooseMe} from '../../sources'

const About = () => {
  return (
    <section id='about'>
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos="fade-left">
            <span className="gradient-text">About Us</span>
          </h1>
          <h4 className="sub-title muted">
            Hello! I'm Roshan, a passionate full stack web developer and designer. I specialize in creating seamless, scalable web applications that deliver exceptional user experiences. Recently graduated from Narula Institute of Technology, I have further honed my skills in React through training at Naresh IT in Hyderabad. My goal is to build intuitive, high-performance web applications while continually expanding my knowledge and embracing new challenges. I'm excited to collaborate with innovative teams and contribute to impactful projects.
          </h4>
        </div>
        <div className="group">
          {
            whyChooseMe.map((list,index)=>(
              <div className="flex-center group-item" data-aos="fade-right" key={index}>
                <div className="flex-center icon-wrapper">
                  {list.icon}
                </div>
                <h4 className="title">{list.title}</h4>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About
