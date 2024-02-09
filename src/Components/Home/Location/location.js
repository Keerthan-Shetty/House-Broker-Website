import React from 'react'
import { location } from '../../Data/data'
import './location.css'

const Location = () => {
  return (
    <div>
        <section className='Location'>
            <div className='container'>
                <div className='heading5 text-center'>
                    <h1>Explore By Location</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,<br/> ducimus! Dolorum ut dolore nobis sint tempore.</p>
                </div>
                <div className='location-card text-center'>
                    {location.map((item,index) => (
                       <div className='card major' key={index}>
                            <img src={item.cover} alt='img' />
                            <div className='override'>
                                <h5>{item.Name}</h5>
                                <div className='items'>
                                    <p>{item.Villas}</p>
                                    <p>{item.Apartments}</p>
                                    <p>{item.Offices}</p>
                                </div>
                            </div>
                       </div> 
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Location
