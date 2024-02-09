import React from 'react'
import Main from './Main/main'
import Feature from './Feature/feature'
import Info from './About-Info/info'
import Properties from './Properties/properties'
import Award from './Award/award'
import Location from './Location/location'
import Employee from './Employee/employee'

const Home = () => {
  return (
    <div>
      <Main/>
      <Feature/>
      <Info />
      <Properties/>
      <Award />
      <Location /> 
      <Employee />
    </div>
  )
}

export default Home
