import React from 'react'
import './SideNavigBar.css'
import { Link } from 'react-router-dom'
import AppLogo from '../../assets/images/app-logo.jpg'
import { menu } from '../../data/menu-items'

const SideNavigBar = () => {
  return (
    <div className="side_navig_bar">
        <Link to='/home'>
            <img src={AppLogo} alt="app-logo" className="app_logo"/>
        </Link>

        <div className='menu_wrapper'>
            {menu.map((item) => (
                <div className='menu_item' key={item.id}>
                    <Link to={item.url}>
                        <img src={item.icon} alt={item.title} width="24px"/>
                        <span>{item.title}</span>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNavigBar