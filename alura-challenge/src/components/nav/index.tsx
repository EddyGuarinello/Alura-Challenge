import React from 'react';
import './style.scss';
import { useNavigate} from 'react-router-dom';
import LoginButton from '../Buttons/LoginButton';

import { GoSearch } from 'react-icons/go';

interface loginEnabled{
  logado: boolean
}

function Nav(props: loginEnabled) {
  function islogged(){
    return(props.logado? <LoginButton></LoginButton>: "")
  }; 
  const navigate = useNavigate();
  return (
    <nav className='flex'>
      <div id='navWrap' className='flex'>
        <span className='flex'>
          <span><img onClick={() => navigate('/')} className='logoNav' src="imgs/Logo.png" alt="" /></span>
          <span id='searchBar' className='flex'>
            <input id='inputNav' style={{width: "393px" ,height: '40px'}} type="text" placeholder='O que deseja encontrar?' />
            <span><GoSearch id='lupa'/></span>
          </span>
          </span>
          {islogged()}
      </div>
    </nav>
  )
}

export default Nav;