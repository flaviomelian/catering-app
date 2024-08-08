import React, { useState } from 'react';
import "./SignUpComponent.css"
import FormEnterprise from '../FormEnterprise/FormEnterprise';
import FormWorker from '../FormWorker/FormWorker';

const SignUpComponent = () => {

  const [selectedRole, setSelectedRole] = useState('');

  const handleSelectChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div id="signup-component">
      <h1 className='header-signup'>REGISTRO</h1>
      <div className='data'>
        <h2 className='hint'>Indique en calidad de qué perfil se registra:</h2>
        <select className='options-signup' onChange={handleSelectChange}>
          <option value="">Seleccionar</option>
          <option value="Empresa">Empresa</option>
          <option value="Trabajador">Trabajador</option>
        </select>
      </div>
      {selectedRole === 'Empresa' && <FormEnterprise />}
      {selectedRole === 'Trabajador' && <FormWorker />}
    </div>
  )
}

export default SignUpComponent
