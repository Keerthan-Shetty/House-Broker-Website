import React from 'react'
import './employee.css'
import img1 from '../../../assets/per1.jpg'
import img2 from '../../../assets/per2.jpg'
import img3 from '../../../assets/per3.jpg'
import img4 from '../../../assets/per4.jpg'
import img5 from '../../../assets/per5.jpg'
import img6 from '../../../assets/per6.jpg'

const Employee = () => {
  return (
    <div>
      <section className='employee bg-light'>
        <div className='container'>
            <div className='heading6 text-center'>
                <h1>Our Featured Agents</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,<br/> ducimus! Dolorum ut dolore nobis sint tempore.</p>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card card-top '>
                        <p className='listing'>50 Listings</p>
                        <div className='person-img text-center'>
                            <img src={img1} alt='..'/>
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div className='content text-center'>
                            <p><i class="fa-solid fa-location-dot"></i> Montreal, Canada</p>
                            <h5>Piyush Bansal</h5>
                            <br/>
                            <div className='social-icon'>
                                <p><i class="fa-brands fa-linkedin"></i></p>
                                <p><i class="fa-brands fa-facebook"></i></p>
                                <p><i class="fa-brands fa-instagram"></i></p>
                                <p><i class="fa-brands fa-x-twitter"></i></p>
                            </div>
                            <div className='contact-button'>
                                <button type='submit' className='message'><i class="fa-solid fa-envelope"></i> Message</button>
                                <button type='submit' className='call'><i class="fa-solid fa-phone"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card card-top '>
                        <p className='listing'>70 Listings</p>
                        <div className='person-img text-center'>
                            <img src={img2} alt='..'/>
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div className='content text-center'>
                            <p><i class="fa-solid fa-location-dot"></i> Liverpool, Canada</p>
                            <h5>Robin S Rachell</h5>
                            <br/>
                            <div className='social-icon'>
                                <p><i class="fa-brands fa-linkedin"></i></p>
                                <p><i class="fa-brands fa-facebook"></i></p>
                                <p><i class="fa-brands fa-instagram"></i></p>
                                <p><i class="fa-brands fa-x-twitter"></i></p>
                            </div>
                            <div className='contact-button'>
                                <button type='submit' className='message'><i class="fa-solid fa-envelope"></i> Message</button>
                                <button type='submit' className='call'><i class="fa-solid fa-phone"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card card-top '>
                        <p className='listing'>60 Listings</p>
                        <div className='person-img text-center'>
                            <img src={img3} alt='..'/>
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div className='content text-center'>
                            <p><i class="fa-solid fa-location-dot"></i> Denever, USA</p>
                            <h5>Scarlett M Jack</h5>
                            <br/>
                            <div className='social-icon'>
                                <p><i class="fa-brands fa-linkedin"></i></p>
                                <p><i class="fa-brands fa-facebook"></i></p>
                                <p><i class="fa-brands fa-instagram"></i></p>
                                <p><i class="fa-brands fa-x-twitter"></i></p>
                            </div>
                            <div className='contact-button'>
                                <button type='submit' className='message'><i class="fa-solid fa-envelope"></i> Message</button>
                                <button type='submit' className='call'><i class="fa-solid fa-phone"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card card-top '>
                        <p className='listing'>55 Listings</p>
                        <div className='person-img text-center'>
                            <img src={img4} alt='..'/>
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div className='content text-center'>
                            <p><i class="fa-solid fa-location-dot"></i> Florida, United States</p>
                            <h5>Michael P. Grimaldo</h5>
                            <br/>
                            <div className='social-icon'>
                                <p><i class="fa-brands fa-linkedin"></i></p>
                                <p><i class="fa-brands fa-facebook"></i></p>
                                <p><i class="fa-brands fa-instagram"></i></p>
                                <p><i class="fa-brands fa-x-twitter"></i></p>
                            </div>
                            <div className='contact-button'>
                                <button type='submit' className='message'><i class="fa-solid fa-envelope"></i> Message</button>
                                <button type='submit' className='call'><i class="fa-solid fa-phone"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card card-top '>
                        <p className='listing'>66 Listings</p>
                        <div className='person-img text-center'>
                            <img src={img5} alt='..'/>
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div className='content text-center'>
                            <p><i class="fa-solid fa-location-dot"></i> Montreal, Canada</p>
                            <h5>Janett S Michael</h5>
                            <br/>
                            <div className='social-icon'>
                                <p><i class="fa-brands fa-linkedin"></i></p>
                                <p><i class="fa-brands fa-facebook"></i></p>
                                <p><i class="fa-brands fa-instagram"></i></p>
                                <p><i class="fa-brands fa-x-twitter"></i></p>
                            </div>
                            <div className='contact-button'>
                                <button type='submit' className='message'><i class="fa-solid fa-envelope"></i> Message</button>
                                <button type='submit' className='call'><i class="fa-solid fa-phone"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card card-top '>
                        <p className='listing'>60+ Listings</p>
                        <div className='person-img text-center'>
                            <img src={img6} alt='..'/>
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div className='content text-center'>
                            <p><i class="fa-solid fa-location-dot"></i> 2225, London</p>
                            <h5>Daisy M Sheetal</h5>
                            <br/>
                            <div className='social-icon'>
                                <p><i class="fa-brands fa-linkedin"></i></p>
                                <p><i class="fa-brands fa-facebook"></i></p>
                                <p><i class="fa-brands fa-instagram"></i></p>
                                <p><i class="fa-brands fa-x-twitter"></i></p>
                            </div>
                            <div className='contact-button'>
                                <button type='submit' className='message'><i class="fa-solid fa-envelope"></i> Message</button>
                                <button type='submit' className='call'><i class="fa-solid fa-phone"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Employee
