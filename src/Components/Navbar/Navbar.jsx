import React, { useState } from 'react'
import "./Navbar.css"
import{resumeUrl, tabs} from "../../sources"
import { Link } from 'react-scroll'
import Logo from '../../assets/Commons/Logo/Logo'
import { HiMenu } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
import SocialHandles from '../../assets/Commons/SocialHandles/SocialHandles'


const Navbar = () => {
    const [openSidebar,setOpenSiodebar] = useState(false);

  return (
    <nav className="navbar flex">
        {openSidebar ? <div className='overlay' onClick={()=>setOpenSiodebar(!openSidebar)} />: ""}
        <Logo/>
        <div className={`box flex-center tabs-group sidebar ${openSidebar ? 'visible':''}`}>
              <div className="flex-center icon-wrapper cancel-btn"
                  onClick={() => setOpenSiodebar(!openSidebar)}>
                <FaTimes/>
            </div>
            {
                tabs.map((tab, index) =>(
                    <Link
                    to={tab.id}
                    smooth={true}
                    spy={true}
                    className='tab'
                    activeClass='active'
                    onClick={()=>setOpenSiodebar(false)}
                    key={index}
                    >
                        {tab.name}
                    </Link>
                ))
            }
        </div>
        <SocialHandles/>
        <div className="box flex-center buttons">
            <Link to='contact' smooth={true} className='btn primary contact-btn'>Hire me</Link>
            
            <a href={resumeUrl} target='_blank' rel='noopener noreferrer' download className='btn services-btn'>
            Resume
          </a>
            {/* <Link to='services' smooth={true} className='btn services-btn'>Services</Link> */}
              <div className='flex-center icon-wrapper menu-btn'
                  onClick={() => setOpenSiodebar(!openSidebar)}>
                  <HiMenu />
              </div>
        </div>

    </nav>
  )
}

export default Navbar
