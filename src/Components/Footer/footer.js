import React from 'react'
import './footer.css'
import { footer } from '../Data/data'
import logo from '../../assets/Logo.png'


// export default Question;

export const Question = () => {
  return (
    <div>
        <section className='question'>
            <div className='container d-flex justify-content-between align-items-center'>
                <div className='content'>
                    <h1>Do You Have Questions ?</h1>
                    <p>We'll help you to grow your career and growth.</p>
                </div>
                <div>
                <h4 className='contact'>Contact Us Today</h4>
                </div>
            </div>
        </section>
    </div>
  )
}

// Footer bottom legal name

export const FooterBottom = () => {
  return (
    <div>
       <div className='bottom text-center'>
        <p><i class="fa-regular fa-copyright"></i> 2024 House Broker - made with passion by Keerthan Shetty <i class='fa-solid fa-heart' style={{color:'red',fontSize:'30px'}}></i></p>
       </div>
    </div>
  )
}

//main footer

const Footer = () => {
  return (
    <div>
      <Question/>
      <div className='footer'>
        <div className='container'>
          <div className='footer-box'>
            <div className='first-part'>
              <img src={logo} alt='logo'></img>
              <h3>Do You Need Help With Anything?</h3>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              <div className='input'>
                <input type='email' name='email' placeholder='Email Address' autoComplete='@gmail.com'/>
                <button type='submit'>Subscribe</button>
              </div>
            </div>
            
              {footer.map((value) =>(
                <div className='Heading'>
                  <h3>{value.title}</h3>
                  <ul>
                    {value.text.map((items)=>(
                      <li>{items.list}</li>
                    ))}
                  </ul>
                </div>  
              ))}

          </div>
          <hr />
          <FooterBottom/>
        </div>
      </div>
    </div>
  )
}

export default Footer

