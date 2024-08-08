import React, { useState } from 'react';
import './FormEnterprise.css';

const FormEnterprise = () => {
  const [formData, setFormData] = useState({
    cif: '',
    name: '',
    surnames: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const cifRegex = /^[A-Z][0-9]{7}[A-Z]$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Actualizar el estado correspondiente con el valor ingresado
    setFormData({
      ...formData,
      [name]: value.toUpperCase(), // Convertir a mayúsculas automáticamente solo para el campo CIF
    });

    // Validar el CIF solo si es el campo CIF el que se está actualizando
    if (name === 'cif') {
      if (value === '' || cifRegex.test(value)) {
        setError(''); // Si está vacío o es válido, no mostrar error
      } else {
        setError('CIF no válido. Debe tener 7 dígitos seguidos entre dos letras.');
      }
    }
  };

  return (
    <div>
      <form id="form-enterprise">
        <h3 className="header-input-enterprise superheader-enterprise">
          Usted se va a registrar en calidad de <b>empresa</b>
        </h3>
        <div className="input-form-enterprise">
          <h3 className="header-input-enterprise">Introduzca su CIF:</h3>
          <input
            className="input-enterprise"
            name="cif"
            value={formData.cif}
            onChange={handleInputChange}
            placeholder="A9999999Z"
            maxLength="9" // Limitar el input a 9 caracteres
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="input-form-enterprise">
          <h3 className="header-input-enterprise">Introduzca su Nombre Comercial:</h3>
          <input
            className="input-enterprise"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nombre Comercial y Forma Jurídica"
          />
        </div>
        <div className="input-form-enterprise">
          <h3 className="header-input-enterprise">Introduzca el nombre completo del encargado:</h3>
          <input
            className="input-enterprise"
            name="surnames"
            value={formData.surnames}
            onChange={handleInputChange}
            placeholder="Nombre y Apellidos"
          />
        </div>
        <div className="input-form-enterprise">
          <h3 className="header-input-enterprise">Introduzca una contraseña válida:</h3>
          <input
            type="password"
            className="input-enterprise"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="8, mayús, minús, num & símbolo"
          />
        </div>
        <div className="input-form-enterprise">
          <h3 className="header-input-enterprise">Repita su contraseña:</h3>
          <input
            type="password"
            className="input-enterprise"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="La contraseña debe coincidir"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary button-form-enterprise"
          onClick={(e) => {
            e.preventDefault();
            handleLogin(); // Aquí deberías implementar la función handleLogin
          }}
        >
          REGISTRARSE
        </button>
      </form>
    </div>
  );
};

export default FormEnterprise;
