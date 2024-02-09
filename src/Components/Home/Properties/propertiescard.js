import React from 'react'
import { card } from '../../Data/data'
import "./properties.css"

const PropertiesCard = () => {
  return (
    <div>
      <div className='property-card'>
        {card.map((value,index) => { 
            const {cover,Name,location,category,price,type}= value
        return(
                <div className = "card" key={index}>
                    <div className='property-img'>
                      <img src={cover} alt='propertyimg' />
                    </div>
                    <div className='text-content'>
                      <div className='category-icon d-flex justify-content-between align-items-center'>
                        <span style={{background: category === "For Rent"   ? "#ff98001a": "#25b5791a" ,
                        color: category === "For Rent" ? "green" : "red"}}>{category}</span> 
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      <h4>{Name}</h4>
                      <p><i className='fa fa-location-dot'></i> {location}</p>
                      <hr/>
                      <div className='button-1 d-flex justify-content-between align-items-center'>
                        <div>
                          <button className='price'>{price}</button> 
                          <span>/sqft</span>
                        </div>
                       <span>{type}</span>
                      </div>
                    </div>
                      
                    </div> 
                
            )
        })
    }
    
      </div>
    </div>
  )
}

export default PropertiesCard
