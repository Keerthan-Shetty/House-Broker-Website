import React from 'react'
import './pricing.css'
import Properties from '../Home/Properties/properties'
import Common from '../Common/common'

const Pricing = () => {
  return (
    <div>
        <section className='about'>
            <Common name='30 Days Money back' title='No Extra Fees. Friendly Support'/>
        </section>
        <Properties/>
    </div>
  )
}

export default Pricing;

