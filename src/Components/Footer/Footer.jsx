import React from 'react';
import "./Footer.css";
import SocialHandles from '../../assets/Commons/SocialHandles/SocialHandles';
import { footer } from '../../sources';
import { Link } from 'react-scroll';
import Logo from '../../assets/Commons/Logo/Logo';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="wrapper">
        <div className="column" data-aos="fade-right">
          <Logo/>
          <SocialHandles/>
        </div>
        {
          footer.map((list, index) => (
            <div className="column" data-aos="fade-right" key={index}>
              <h3 className="muted title">{list.title}</h3>
              {
                list.routes.map((route, i) => (
                  <Link to={route.id || ""} smooth={true} className='route' key={i}>
                    {route.name}
                  </Link>
                ))
              }
            </div>
          ))
        }
      </div>
      <div className="flex-center copyright" data-aos="fade-left">
        <h4>Copyright &copy; All right reserved -| 2024</h4>
        <p className="muted">Built with love by Roshan</p>
      </div>
    </footer>
  );
}

export default Footer;
