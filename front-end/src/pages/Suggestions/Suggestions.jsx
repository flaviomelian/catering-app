import React from 'react'
import SuggestionFormComponent from '../../components/SuggestionFormComponent/SuggestionFormComponent'
import './Suggestions.css'

const Suggestions = () => {
  return (
    <>
        <h1 className='suggestions-header'>Sugerencias</h1>
        <p className='paragraph-suggestions'>En <strong>Catering Empresarial</strong> valoramos tu opinión y nos encantaría saber cómo podemos mejorar nuestros servicios. Por favor, utiliza el formulario a continuación para enviar tus sugerencias de manera anónima. ¡Tu feedback es muy importante para nosotros!</p>
        <SuggestionFormComponent/>
    </>
  )
}

export default Suggestions
