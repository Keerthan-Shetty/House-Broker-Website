import React from 'react'
import './properties.css'
import PropertiesCard from './propertiescard'

const Properties = () => {
  return (
    <div>
        <section className='property'>
            <div className='container'>
                <div className='heading3 text-center'>
                    <h1>Recent Property Listed</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ducimus! Dolorum ut dolore nobis sint tempore.</p>
                </div>
                <PropertiesCard/>
            </div>
        </section>
    </div>
  )
}

export default Properties
