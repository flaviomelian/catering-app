import React from 'react'

const FormWorker = () => {

  const [dni, setDni] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [surnames, setSurnames] = useState('');
  const [dni, setDni] = useState('');

  const dniRegex = /^[0-9]{8}[A-Z]$/;

  const handleInputChange = (event) => {
    const value = event.target.value.toUpperCase(); // Convertir a mayúsculas automáticamente
    setDni(value);

    if (value === '' || dniRegex.test(value)) {
      setError(''); // Si está vacío o es válido, no mostrar error
    } else {
      setError('DNI no válido. Debe tener 8 números seguidos de una letra.');
    }
  };

  return (
    <div>
      <form>
        <div>
            <h2>Introduzca su DNI:</h2>
            <input
                value={dni}
                onChange={handleInputChange}
                placeholder="Introduce tu DNI"
                maxLength="9" // Limitar el input a 9 caracteres
            />
        </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Introduzca su Nombre:</h2>
      <input/>
      <h2>Introduzca sus Apellidos:</h2>
      <input/>
      <h2>Escoja la empresa a la que pertenece:</h2>
      <input/>
      </form>
    </div>
  )
}

export default FormWorker