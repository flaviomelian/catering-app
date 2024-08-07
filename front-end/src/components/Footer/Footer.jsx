import React from 'react'
import './Footer.css'
import fbimg from '../../assets/facebook.png';
import ximg from '../../assets/X.png';
import lnkedinimg from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <img className='rrss' src={fbimg}/>
        <img className='rrss' src={ximg}/>
        <img className='rrss' src={lnkedinimg}/>
        <div className='copyright'>
          &copy; 2024 NOMBRE-EMPRESA Todos los derechos reservados.
        </div>
      </div>
    </>
  )
}

export default Footer
