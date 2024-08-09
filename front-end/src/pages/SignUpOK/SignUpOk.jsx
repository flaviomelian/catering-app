import React from 'react'
import './SignUpOk.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignUpOk = () => {

    const navigate = useNavigate()

  return (
    <div className='signup-ok'>
      Usted ha sido registrado correctamente
      <button
          type="button"
          className="btn btn-primary button-goto-login"
          onClick={(e) => {
            e.preventDefault();
            navigate('/login');
          }}
        >
          VOLVER AL INICIO DE SESIÓN
        </button>
    </div>
  )
}

export default SignUpOk
