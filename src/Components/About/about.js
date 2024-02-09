import React from 'react'
import Common from '../Common/common'
import Info from '../Home/About-Info/info'
import house2 from '../../assets/house2.png'
import './about.css'

const About = () => {
  return (
    <div>
        <section className='about'>
            <Common name='About Us' title='About Us - Who We Are?'/>
        </section>
        <Info/>
        <section className='Design'>
          <div className='container'>
          <div className='design-heading text-center'>
                <h2>Our Own Designs And Builders</h2>
                <p>We gather your information related to your taste and ideas to build your dream project</p>
              </div>
            <div className='row d-flex justify-content-center align-items-center'>
             <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='house2-img'>
                  <img src={house2} alt='house'/>
                  </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='house2-content'>
                  <h3>Our Models</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, eum exercitationem delectus libero at consectetur mollitia, odio cumque aut sit soluta totam expedita illo neque saepe quisquam nobis laboriosam incidunt doloremque, nulla animi dolore. Tenetur molestias ducimus consectetur error numquam provident cumque tempora. Corporis ea pariatur ipsam beatae facilis ipsa quisquam nesciunt mollitia doloremque facere, ut sed, eos tempore ducimus voluptate voluptatem ratione officiis aperiam hic nihil.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About;
