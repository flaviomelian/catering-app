import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();
  
  // Verifica si la ruta actual es la de login
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      <header className='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid mine">
            <div className="navbar-nav my-nav">
              <div className={`${isLoginPage ? 'ankles-center' : 'ankles'}`}>
                <a 
                  className="nav-link my-link init" 
                  href="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                  }}
                >
                  Inicio
                </a>
                <a 
                  className="nav-link my-link aboutus" 
                  href="/about-us" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/about-us');
                  }}
                >
                  Sobre Nosotros
                </a>
                <a 
                  className="nav-link my-link suggestions" 
                  href="/suggestions" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/suggestions');
                  }}
                >
                  Sugerencias
                </a>
                {!isLoginPage && (
                  <Link className='login' to="/login">Iniciar sesión</Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header
