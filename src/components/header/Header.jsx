import React from 'react'
import './Header.css'
import HeaderTop from './headerTop/HeaderTop'
import { Link, NavLink } from 'react-router-dom'
import {BsPeopleFill} from 'react-icons/bs'
import {BsBasketFill} from 'react-icons/bs'

function Header() {
  return (
    <div>
      <HeaderTop />
      <div className='header'>
        <div>
          <NavLink> Barchasi</NavLink>
          <NavLink> <BsPeopleFill/> Toshkentga</NavLink>
          <NavLink> <BsPeopleFill/> Namanganga</NavLink>
          <NavLink> <BsBasketFill/> Toshkentga</NavLink>
          <NavLink> <BsBasketFill/> Namanganga</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header