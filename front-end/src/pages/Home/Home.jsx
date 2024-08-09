import React from 'react'
import qualityimg from '../../assets/quality.jpg';
import choices from '../../assets/choices.png';
import crono from '../../assets/crono.png';
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='main-content'>
        <div className="hero">
          <h1>Deliciosos Menús para Empresas</h1>
          <p className='subheader'>Tu socio ideal para eventos corporativos y reuniones de trabajo</p>
          <a href="#" className="cta-button">Solicitar un Presupuesto</a>
        </div>
        <div className="features">
    <div className="feature">
        <img className="img-high-quality" src={qualityimg} alt="Alta Calidad"/>
        <div className="content">
            <h3>Alta Calidad</h3>
            <div className='paragraphs'>
              <p className="paragraph">
                  Nos enorgullece ofrecer productos de la más alta calidad, seleccionando cuidadosamente cada ingrediente para asegurar que cada plato esté a la altura de tus expectativas. Desde frutas y verduras frescas de temporada hasta carnes y pescados seleccionados, todo es preparado con un enfoque en la excelencia culinaria.
              </p>
              <p className="paragraph">
                  Creemos que la calidad comienza desde la fuente, por eso trabajamos estrechamente con proveedores locales y de confianza, garantizando frescura y sostenibilidad en cada bocado.
              </p>
            </div>
        </div>
    </div>
    <div className="feature second">
        <img className="img-options" src={choices} alt="Variedad de Opciones"/>
        <div className="content two">
            <h3>Variedad de Opciones</h3>
            <div className='paragraphs'>
            <p className="paragraph">
                Entendemos que cada cliente es único, y por eso ofrecemos una amplia gama de opciones de menú que se adaptan a diferentes paladares y necesidades dietéticas. Desde opciones vegetarianas y veganas hasta menús sin gluten o bajo en calorías, tenemos algo para todos.
            </p>
            <p className="paragraph">
                Nuestra flexibilidad nos permite personalizar los menús según tus preferencias, asegurando que cada evento sea una experiencia gastronómica inolvidable para todos los asistentes.
            </p>
            </div>
        </div>
    </div>
    <div className="feature">
        <img className="img-crono" src={crono} alt="Entrega Puntual"/>
        <div className="content three">
            <h3>Entrega Puntual</h3>
            <div className='paragraphs'>
            <p className="paragraph">
                La puntualidad es fundamental en el mundo corporativo, y nos comprometemos a entregar tus pedidos justo a tiempo, sin excepciones. Sabemos que en eventos importantes cada minuto cuenta, y por eso trabajamos con un sistema logístico eficiente para garantizar que todo llegue en el momento preciso.
            </p>
            <p className="paragraph">
                Nuestro equipo de entrega está altamente capacitado para manejar cualquier eventualidad, asegurando que tu experiencia con nosotros sea fluida y libre de preocupaciones.
            </p>
            </div>
        </div>
    </div>
</div>

        </div>
    </div>
  )
}

export default Home
