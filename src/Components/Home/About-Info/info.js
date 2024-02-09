import React from 'react'
import house from '../../../assets/house.png'
import './info.css'

const Info = () => {
  return (
    <div>
      <section className='info'>
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='info-about'>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, eum exercitationem delectus libero at consectetur mollitia, odio cumque aut sit soluta totam expedita illo neque saepe quisquam nobis laboriosam incidunt doloremque, nulla animi dolore. Tenetur molestias ducimus consectetur error numquam provident cumque tempora. Corporis ea pariatur ipsam beatae facilis ipsa quisquam nesciunt mollitia doloremque facere, ut sed, eos tempore ducimus voluptate voluptatem ratione officiis aperiam hic nihil, <br/><br/>odio qui officia! Error fugit, illum rerum, rem explicabo optio accusamus veniam libero quisquam nobis cupiditate placeat nam animi quasi expedita aperiam ratione iste. Suscipit quaerat inventore, pariatur quas cupiditate nesciunt officiis quos</p>
                    <button>Visit Us</button>
                </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='house-image text-center'>
                    <img src={house} alt='house' />
                </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Info
