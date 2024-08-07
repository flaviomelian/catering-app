import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

const Header = () => {
  return (
    <>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mine">
          <div className="navbar-nav my-nav">
            <a className="nav-link my-link" href="/" onClick={() => navigate('/')}>
              Inicio
            </a>
            <a className="nav-link my-link" href="/about-us" onClick={() => navigate('/aboutUs')}>
              Sobre Nosotros
            </a>
            <a className="nav-link my-link" href="suggestions" onClick={() => navigate('/suggestions')}>
              Sugerencias
            </a>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Header
