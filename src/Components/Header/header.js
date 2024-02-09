import React, {useState} from 'react'
import './header.css'
import { nav } from '../Data/data'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/Logo.png"

const Header = () => {
  const[navList, setNavList] = useState(false);
  return (
    <div>
      <header>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt='logo'/> 
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list,index) =>(
                <li key={index}>
                  <NavLink to={list.path}>{list.text}</NavLink>
                </li>
              ))}
              
            </ul>
          </div>
          <div className='signup flex'>
            <button type='submit'><i class="fa-solid fa-right-from-bracket"></i> Sign-up</button>
          </div>
          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{ navList ? <i class="fa-solid fa-xmark"></i> : <i className='fa-solid fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
