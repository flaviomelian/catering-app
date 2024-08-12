import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../services/auth';
import './FormEnterprise.css';

const FormEnterprise = () => {

  const[CIF, setCIF] = useState('')
  const[name_enterprise, setName_enterprise] = useState('')
  const[name_CEO, setName_CEO] = useState('')
  const[DNI_AdminEnterprise, setDNI_AdminEnterprise] = useState('')
  const[password, setPassword] = useState('')
  const[confirmPassword, setConfirmPassword] = useState('')
  const [errorCIF, setErrorCIF] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const navigate = useNavigate()

  const cifRegex = /^[A-Z][0-9]{7}[A-Z]$/;

  const handleInputChange = (event, inputToChange) => {

    const { value } = event.target;

    switch(inputToChange){
      case 1:
        setCIF(value)
        if (value === '' || cifRegex.test(value)) {
          setErrorCIF(''); // Si está vacío o es válido, no mostrar error
        } else {
          setErrorCIF('CIF no válido. Debe tener 7 dígitos seguidos entre dos letras.');
        }
      break;
      case 2: setName_enterprise(value); break;
      case 3: setName_CEO(value); break;
      case 4: setDNI_AdminEnterprise(value); break;
      case 5: setPassword(value); break;
      case 6: setConfirmPassword(value);
              if (confirmPassword !== password ) setErrorPassword('Las contraseñas deben coincidir')
              else setErrorPassword('')
              break;
    }

  };

  const handleSignup = async () =>{
    console.log(CIF, name_enterprise, name_CEO, password);
    
    try {
      const data = {
        CIF: CIF,
        name_enterprise: name_enterprise,
        name_CEO: name_CEO,
        DNI_AdminEnterprise: DNI_AdminEnterprise,
        password: password
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
      <form id="form-enterprise">
        <h3 className="header-input-enterprise superheader-enterprise">
          Usted se va a registrar en calidad de <b>empresa</b>
        </h3>
        <div className="input-form-enterprise">
          <h3 className="header-input-enterprise">Introduzca su CIF:</h3>
          <input
            className="input-enterprise"
            name="cif"
            value={CIF}
            onChange={(event) => handleInputChange(event, 1)}
            placeholder="A9999999Z"
            maxLength="9" // Limitar el input a 9 caracteres
          />
        </div>
        {errorCIF && <p style={{ color: 'red' }}>{errorCIF}</p>}
        <div className="input-form-enterprise">
          <h3 className="header-input-enterprise">Introduzca su Nombre Comercial:</h3>
          <input
            className="input-enterprise"
            name="name_enterprise"
            value={name_enterprise}
            onChange={(event) => handleInputChange(event, 2)}
            placeholder="Nombre Comercial y Forma Jurídica"
          />
        </div>
        <div className="input-form-enterprise">
          <h3 className="header-input-enterprise">Introduzca el nombre completo del encargado:</h3>
          <input
            className="input-enterprise"
            name="name_CEO"
            value={name_CEO}
            onChange={(event) => handleInputChange(event, 3)}
            placeholder="Nombre y Apellidos"
          />
        </div>
        <div className="input-form-enterprise">
          <h3 className="header-input-enterprise">Introduzca el DNI del encargado:</h3>
          <input
            className="input-enterprise"
            name="DNI"
            value={DNI_AdminEnterprise}
            onChange={(event) => handleInputChange(event, 4)}
            placeholder="DNI"
          />
        </div>
        <div className="input-form-enterprise">
          <h3 className="header-input-enterprise">Introduzca una contraseña válida:</h3>
          <input
            type="password"
            className="input-enterprise"
            name="password"
            value={password}
            onChange={(event) => handleInputChange(event, 5)}
            placeholder="8, mayús, minús, num & símbolo"
          />
        </div>
        <div className="input-form-enterprise">
          <h3 className="header-input-enterprise">Repita su contraseña:</h3>
          <input
            type="password"
            className="input-enterprise"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => handleInputChange(event, 6)}
            placeholder="La contraseña debe coincidir"
          />
        </div>
        {errorPassword && <p style={{ color: 'red' }}>{errorPassword}</p>}
        <button
          type="button"
          className="btn btn-primary button-form-enterprise"
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

export default FormEnterprise;
