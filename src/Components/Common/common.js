import React from 'react'
import './common.css'

const Common = ({name,title}) => {
  return (
    <div>
        <div className='common'>
            <div className='container'>
                <span>{name}</span>
                <h2>{title}</h2>
              </div>
        </div>
    </div>
  )
}

export default Common;
