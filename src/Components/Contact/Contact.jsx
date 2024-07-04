import React from 'react'
import "./Contact.css"
import {contactOptions} from '../../sources'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e85ef14a-616a-4536-b35c-b573dd4d1cf0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <section id='contact' data-aos="fade-zoom-in">
      <div className="wrapper">
        <div className="contact-options">
          {
            contactOptions.map((option,index)=>(
              <div className='flex-center option' data-aos="fade-right" key={index}>
                <div className="flex-center icon-wrapper">{option.icon}</div>
                <h4 className="muted">{option.title}</h4>
                <h3 className="value">{option.value}</h3>
              </div>
            ))
          }
        </div>
        <form className="contact-form" onSubmit={onSubmit} data-aos="fade-left">
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Join forces with me!</span>
            </h1>
            <p className="muted">
              I build with precision and passion, creating web projects that stands out. It's as straightforward as that!
            </p>
          </div>
          <div className="middle">
            <div className="flex row">
              <input type="text" placeholder='First Name' name='firstname' className='control' />
              <input type="text" placeholder='last Name' name='lastname' className='control' />
            </div>
            <div className="flex row">
              <input type="email" placeholder='Email address' name='email' className='control' />
              <input type="tel" placeholder='Phone number' name='phone' className='control' />
            </div>
            <textarea name="message" cols={30} rows={10} placeholder='Message' className='control'></textarea>
          </div>
          <div className="flex-center bottom">
            <button className="btn primary">Send Now</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
