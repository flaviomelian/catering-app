import React from 'react'
import './AboutUs.css'
import aboutUs from '../../assets/sobreNosotros.jpeg';
import serviceCathering from '../../assets/Servicio-de-catering-empresarial.jpg';
import banquet from '../../assets/catering-banquet-table.jpg';

const AboutUs = () => {
  return (
    <div>
        <div className='main-content-about-us'>
        <h1 className='header-about-us'>Sobre Nosotros</h1>
    <div className='group'>
        <img className='about-us-image-1' src={aboutUs} alt="about-us"/>
        <p class="paragraph-about-us with-image">
            En <strong>Catering Empresarial</strong>, nos apasiona llevar experiencias culinarias excepcionales 
            a entornos corporativos. Fundada con el objetivo de transformar la manera en que las empresas disfrutan
            de sus eventos y reuniones, nuestra compañía se ha establecido como líder en el sector gracias a nuestro
            enfoque en la calidad, la innovación y el servicio al cliente. 
        </p>
    </div>  
    <img className='about-us-image-2' src={serviceCathering} alt="enterprise-catering"/>
    <p class="paragraph-about-us paragraph-2">
        Desde nuestros inicios, hemos creído que la comida es más que un simple acompañamiento; es una parte 
        esencial de la experiencia. Por eso, trabajamos con un equipo de chefs altamente capacitados que se 
        especializan en crear menús personalizados que reflejan tanto la identidad de su empresa como las necesidades 
        dietéticas de sus empleados y clientes. Utilizamos ingredientes frescos y de origen local siempre que es posible, 
        asegurando que cada plato no solo sea delicioso, sino también sostenible.
    </p>
    <p class="paragraph-about-us paragraph-2">
        Entendemos que cada evento empresarial es único y merece una atención al detalle impecable. 
        Ya sea una pequeña reunión de trabajo, un almuerzo ejecutivo, un lanzamiento de producto o una gala corporativa, 
        nuestro equipo se dedica a asegurar que cada aspecto de la experiencia culinaria esté perfectamente organizado. 
        Ofrecemos una amplia gama de opciones de menú, incluyendo desayunos, almuerzos, cenas, coffee breaks y estaciones de comida, 
        todas adaptadas a sus preferencias y a las particularidades del evento.
    </p>
    <div className=''>
        <p class="paragraph-about-us with-image">
            Nos enorgullecemos no solo de la calidad de nuestra comida, sino también de la excelencia de nuestro servicio. 
            Sabemos lo importante que es la puntualidad y la presentación en el mundo corporativo, por lo que nos aseguramos 
            de que cada entrega sea a tiempo y que cada presentación sea impecable. Nuestro equipo de servicio al cliente está 
            siempre disponible para ayudar con la planificación y para adaptarse a cualquier cambio de última hora, garantizando 
            que su evento sea un éxito de principio a fin.
        </p>
        <img className='banquet' src={banquet} alt='banquete'/>
    </div>
    
    <p class="paragraph-about-us paragraph-3">
        En <strong>Catering Empresarial</strong>, nuestro compromiso es superar sus expectativas en cada ocasión. 
        A lo largo de los años, hemos construido relaciones duraderas con nuestros clientes, quienes valoran nuestra fiabilidad, 
        flexibilidad y, sobre todo, nuestra dedicación a hacer que cada evento sea especial. Creemos que, cuando se trata de catering, 
        los detalles marcan la diferencia, y nos esforzamos por hacer de cada evento una experiencia memorable.
    </p>
    <p class="paragraph-about-us final">
        Lo invitamos a descubrir cómo <strong>Catering Empresarial</strong> puede convertirse en su socio de confianza 
        para todas sus necesidades de catering corporativo. Ya sea que necesite un servicio para un evento único o un 
        proveedor recurrente, estamos aquí para ayudarlo a crear momentos que sus empleados y clientes recordarán.
    </p>
        </div>
    </div>
  )
}

export default AboutUs
