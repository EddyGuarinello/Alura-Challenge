import React from 'react';
import './style.scss';

import { GoSearch } from 'react-icons/go';
function Nav() {
  return (
    <nav className='flex'>   
      <div id='navWrap' className='flex'>
        <span className='flex'>
          <span><img src="imgs/Logo.png" alt="" /></span>
          <span id='searchBar' className='flex'>
            <input style={{width: "393px" ,height: '40px'}} type="text" placeholder='O que deseja encontrar?' />
            <span><GoSearch id='lupa'/></span>
          </span>
          </span>
          <span className='flex' id='loginButton'>Login</span>
      </div>
    </nav>
  )
}

export default Nav;