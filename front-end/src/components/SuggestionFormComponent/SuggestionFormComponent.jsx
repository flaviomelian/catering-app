import React from 'react'
import './SuggestionFormComponent.css'

const SuggestionFormComponent = () => {
  return (
    <div>
      <div className='suggestions-component'>
       <form action="/submit-suggestion" method="post" id="suggestion-form">
            <div className="form-group">
                <label id="suggestion-label" for="suggestion"><b>Tu sugerencia:</b></label>
                <textarea id="suggestion" name="suggestion" rows="6" required placeholder="Escribe aquí tus sugerencias..."></textarea>
            </div>
            <div className="form-group second">
                <label for="rating"><b>Califica nuestro servicio:</b></label>
                <select id="rating" name="rating" required>
                    <option value="">Selecciona una opción</option>
                    <option value="5">Excelente - ★★★★★</option>
                    <option value="4">Muy bueno - ★★★★☆</option>
                    <option value="3">Bueno - ★★★☆☆</option>
                    <option value="2">Mejorable - ★★☆☆☆</option>
                    <option value="1">Malo - ★☆☆☆☆</option>
                </select>
            </div>
            <div className="form-group third">
                <button type="submit" className="btn btn-primary button-suggestions">Enviar Sugerencia</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default SuggestionFormComponent
