import './App.scss';


import ControlRoom from './ControlRoom/ControlRoom';
import NavBar from './NavBar/NavBar';
import Slider from './ChooseThePlanet/Slider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Modal from './components/Modal';
import React, { useState } from 'react';

function App() {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);


  return (

    <div>
    <ContenedorBotones>
      <Boton onClick={() => cambiarEstadoModal1 (!estadoModal1)}>Alpha</Boton>
      <Boton onClick={() => cambiarEstadoModal2 (!estadoModal2)}>Ceres</Boton>
      <Boton onClick={() => cambiarEstadoModal3 (!estadoModal3)}>Earth</Boton>
      <Boton onClick={() => cambiarEstadoModal4 (!estadoModal4)}>Kepler</Boton>
      <Boton onClick={() => cambiarEstadoModal5 (!estadoModal5)}>Mars</Boton>
      <Boton onClick={() => cambiarEstadoModal6 (!estadoModal6)}>Pegasus</Boton>
      <Boton onClick={() => cambiarEstadoModal7 (!estadoModal7)}>Pluton</Boton>
    </ContenedorBotones>

    <Modal
     estado= {estadoModal1}
     cambiarEstado={cambiarEstadoModal1}
     titulo="Earth"
     >
     <Contenido> 
      <h1>Alpha</h1>
      <p> Es la estrella más cercana al sol y solo es visible en el hemisferio sur. Es la tercera estrella más brillante de la Tierra y consta de varias estrellas que parecen un solo punto de luz. Los vecinos estelares más cercanos al sol son tres estrellas en el sistema alfa.

Las dos estrellas principales son Alfa Centauri A y B, que forman un par binario. Están a una media de 4,3 años luz de la Tierra. La tercera estrella es Próxima Centauri. Alfa Centauri A y B se encuentran cada 80 años en una órbita baricéntrica común</p>
      
      <Boton onClick={() => cambiarEstadoModal1 (!estadoModal1)}>Aceptar</Boton>
      </Contenido>
    </Modal>

    <Modal
  estado= {estadoModal2}
  cambiarEstado={cambiarEstadoModal2}
  titulo="Earth"
  >
  <Contenido> 
   <h1>Ceres</h1>
   <p>Ceres es un planeta enano y el objeto astronómico más grande del cinturón de asteroides, región del sistema solar que se encuentra entre las órbitas de Marte y Júpiter; su diámetro de aproximadamente 945 km lo convierte en el trigésimo tercer objeto conocido más grande del sistema solar.</p>
   <Boton  onClick={() => cambiarEstadoModal2 (!estadoModal2)}>Aceptar</Boton>
   </Contenido>
 </Modal>

 <Modal
  estado= {estadoModal3}
  cambiarEstado={cambiarEstadoModal3}
  titulo="Earth"
  >
  <Contenido> 
   <h1>Earth</h1>
   <p> es que es el único planeta en el sistema solar con agua líquida en su superficie. Este fue un factor clave para el desarrollo de la vida en este planeta. Actualmente, es el único planeta del sistema solar con unas condiciones favorables para la vida.</p>
   
   <Boton  onClick={() => cambiarEstadoModal3 (!estadoModal3)}>Aceptar</Boton>
   </Contenido>
 </Modal>

 <Modal
  estado= {estadoModal4}
  cambiarEstado={cambiarEstadoModal4}
  titulo="Earth"
  >
  <Contenido> 
   <h1>Kepler</h1>
   <p> es el más similar al tamaño y la temperatura estimada de la Tierra.

Este exoplaneta  revelado en 2020 es solo 1.06 veces más grande que nuestro propio planeta. Además, la cantidad de luz estelar que recibe de su estrella anfitriona es el 75% de la cantidad de luz que recibe la Tierra de nuestro Sol, lo que significa que la temperatura del exoplaneta también puede ser similar a la de nuestro planeta. Pero a diferencia de la Tierra, orbita una enana roja. Aunque no se ha observado ninguno en este sistema, este tipo de estrella es conocida por los brotes estelares que pueden hacer que el entorno de un planeta sea un desafío para cualquier vida potencial.</p>
   <Boton  onClick={() => cambiarEstadoModal4 (!estadoModal4)}>Aceptar</Boton>
   </Contenido>
 </Modal>

 <Modal
  estado= {estadoModal5}
  cambiarEstado={cambiarEstadoModal5}
  titulo="Earth"
  >
  <Contenido> 
   <h1>MARS</h1>
   <p> Marte es el segundo planeta más pequeño del Sistema Solar y el cuarto en orden de distancia del Sol. Presenta una superficie sólida, polvorienta, fría y desértica. Su nombre proviene de la mitología romana, en homenaje al dios de la guerra (el color rojizo de su superficie representaba a la sangre derramada en las batallas). También se lo conoce como “el planeta rojo” y puede ser visto desde la Tierra.

Fuente: https://concepto.de/marte/#ixzz7a3LW1p00</p>
   <Boton  onClick={() => cambiarEstadoModal5 (!estadoModal5)}>Aceptar</Boton>
   </Contenido>
 </Modal>

 <Modal
  estado= {estadoModal6}
  cambiarEstado={cambiarEstadoModal6}
  titulo="Earth"
  >
  <Contenido> 
   <h1>Pegasus</h1>
   <p> La segunda estrella más brillante es Scheat (β Pegasi), gigante roja de tipo espectral M; unas 95 veces más grande que el Sol, está rodeada por una fina envoltura de gas originada por el viento estelar que sopla desde su superficie.4​Markab (α Pegasi), tercera estrella en cuanto a brillo, es una estrella blanca —catalogada como B9V, 5​ B9III6​ o A0IV— situada a 133 años luz. γ Pegasi, oficialmente llamada Algenib por la IAU,1​ es una subgigante blanco-azulada de tipo B2IV7​ y variable Beta Cephei con una pequeña fluctuación de brillo de 0,09 magnitudes. Markab, Scheat y Algenib, junto a Alpheratz (α Andromedae), forman el gran asterismo conocido como el Cuadrante de Pegaso.</p>
   <Boton  onClick={() => cambiarEstadoModal6 (!estadoModal6)}>Aceptar</Boton>
   </Contenido>
 </Modal>

 <Modal
  estado= {estadoModal7}
  cambiarEstado={cambiarEstadoModal7}
  titulo="Earth"
  >
  <Contenido> 
   <h1>Pluton</h1>
   <p> Plutón es un planeta enano que se encuentra en el cinturón de Kuiper. Es un área llena de objetos helados y otros planetas enanos en el borde de nuestro sistema solar. Debido a que Plutón es el objeto más grande conocido en esta región, algunos lo llaman "Rey del Cinturón de Kuiper".</p>
   <Boton  onClick={() => cambiarEstadoModal7 (!estadoModal7)}>Aceptar</Boton>
   </Contenido>
 </Modal>

    <Router>
    
    
    <Modal/>
        <NavBar />
        
       <Slider />
        <Switch>
          <Route path="/controlroom" component={ControlRoom} />
        </Switch>
        </Router>
        
     </div>
       
  
);
}
    
   
    


export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;