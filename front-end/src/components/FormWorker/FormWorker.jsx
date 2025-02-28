import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../services/auth';
import './FormWorker.css';

const FormWorker = () => {
  const [formData, setFormData] = useState({
    dni: '',
    name_worker: '',
    surnames: '',
    enterprise: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate()

  const dniRegex = /^[0-9]{8}[A-Z]$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setFormData({
      ...formData,
      [name]: value.toUpperCase(), // Convertir a mayúsculas automáticamente solo para el campo DNI
    });

    if (name === 'dni' && (value === '' || dniRegex.test(value))) {
      setError(''); // Si está vacío o es válido, no mostrar error
    } else if (name === 'dni') {
      setError('DNI no válido. Debe tener 8 números seguidos de una letra.');
    }
  };

  const handleSignup = async () =>{
    try {
      console.log("form data: ", formData);
      
      const data = {
        dni: formData.dni,
        name_worker: formData.name_worker,
        surnames: formData.surnames,
        enterprise: formData.enterprise,
        password: formData.password
      }
      const result = await signUp(data)
      localStorage.setItem('token', result.token)
      navigate('/signup-ok', { state: { registered: true } }) //Con esta linea redirecciono a RegisterOK y mando el valor TRUE en una variable registered que podre usar en el RegisterOK
    } catch (error) {
      console.error('Rellene todos los campos adecuadamente, por favor')
    }
  }

  return (
    <div>
      <form id="form-worker">
        <h3 className="header-input-worker superheader">
          Usted se va a registrar en calidad de <b>trabajador</b>
        </h3>
        <div className="input-form-worker">
          <h3 className="header-input-worker">Introduzca su DNI:</h3>
          <input
            className="input-worker"
            name="dni"
            value={formData.dni}
            onChange={handleInputChange}
            placeholder="99999999X"
            maxLength="9" // Limitar el input a 9 caracteres
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="input-form-worker">
          <h3 className="header-input-worker">Introduzca su Nombre:</h3>
          <input
            className="input-worker"
            name="name_worker"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nombre"
          />
        </div>
        <div className="input-form-worker">
          <h3 className="header-input-worker">Introduzca sus Apellidos:</h3>
          <input
            className="input-worker"
            name="surnames"
            value={formData.surnames}
            onChange={handleInputChange}
            placeholder="Apellidos"
          />
        </div>
        <div className="input-form-worker">
          <h3 className="header-input-worker">Introduzca una contraseña válida:</h3>
          <input
            type="password"
            className="input-worker"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="8, mayús, minús, num & simbolo"
          />
        </div>
        <div className="input-form-worker">
          <h3 className="header-input-worker">Repita su contraseña:</h3>
          <input
            type="password"
            className="input-worker"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="La contraseña debe coincidir"
          />
        </div>
        <div className="input-form-worker">
          <h3 className="header-input-worker">Escoja la empresa a la que pertenece:</h3>
          <select
            className="input-worker"
            name="enterprise"
            value={formData.enterprise}
            onChange={handleInputChange}
          >
            <option>Escoger empresa</option>
            <option>Empresa 1</option>
            <option>Empresa 2</option>
            <option>Empresa 3</option>
            <option>Empresa 4</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-primary button-form-worker"
          onClick={(e) => {
            e.preventDefault();
            handleSignup();
          }}
        >
          REGISTRARSE
        </button>
      </form>
    </div>
  );
};

export default FormWorker;
