import React from 'react'
import './award.css'
import { awards } from '../../Data/data'

const Award = () => {
  return (
    <div>
      <section className='award-section'>
        <div className='container'>
            <div className='heading4 text-center'>
                <h4>Our Awards</h4>
                <h2>Over 1,24,000+ Happy User Bieng With Us Still <br/>They Love Our Services</h2>
            </div>
            <div className='awards'>
                {awards.map((index,value) => (
                    <div className='box' key={index}>
                        <div className='icon'>
                            <span>{value.icon}</span>
                        </div>
                        <h3>{value.num}</h3>
                        <p>{value.Name}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Award
