import React from 'react'
import Common from '../Common/common'
import Employee from '../Home/Employee/employee'
import Award from '../Home/Award/award'
import './blog.css'

const Blog = () => {
  return (
    <div>
        <section className='blog'>
            <Common name='Blog' title='Blog Phase - Our Blogs'/>
        </section>
        <Award />
        <Employee/>
    </div>
  )
}

export default Blog
