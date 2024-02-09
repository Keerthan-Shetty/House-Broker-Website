import React from 'react'
import './feature.css'
import h1 from '../../../assets/h1.png'
import h2 from '../../../assets/h2.png'
import h3 from '../../../assets/h3.png'
import h4 from '../../../assets/h4.png'
import h5 from '../../../assets/h5.png'

const Feature = () => {
    return (
        <div>
            <section className='features'>
                <div className='container'>
                    <div className='heading1 text-center'>
                        <h1>Featured Properties</h1>
                        <p>all types properties avalaible here</p>
                    </div>
                    <div className='row '>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='icon-card text-center'>
                                <img src={h1} alt='icon'/>
                                <br/><br />
                                <h6>Family House</h6>
                                <p>122 Property</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='icon-card text-center'>
                                <img src={h2} alt='icon '/>
                                <br/><br />
                                <h6>House & Villa</h6>
                                <p>155 Property</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='icon-card text-center'>
                                <img src={h3} alt='icon'/>
                                <br/><br />
                                <h6>Apartment</h6>
                                <p>300 Property</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='icon-card text-center'>
                                <img src={h4} alt='icon'/>
                                <br/><br />
                                <h6>Office & Studio</h6>
                                <p>80 Property</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='icon-card text-center'>
                                <img src={h5} alt='icon'/>
                                <br/><br />
                                <h6>Villa & Condo</h6>
                                <p>90 Property</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='icon-card text-center'>
                                <img src={h1} alt='icon'/>
                                <br/><br />
                                <h6>Beach House</h6>
                                <p>122 Property</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feature;
