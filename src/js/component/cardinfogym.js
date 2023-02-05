import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import M1 from "../../img/Machop.png"
import M2 from "../../img/Machoke.png"
import M3 from "../../img/Machamp.png"
import "../../styles/InfoGym.css";
import Pokebola from "../../img/POKEBOLA.png"

function Cardservice() {
  return (
    <CardGroup>
        <img id="img" src={Pokebola}/>
      <Card className="infogym">
        <Card.Img variant="top" src={M1} />
        <Card.Body className="info1">
          <Card.Title><h1 className="tituloinfo">Evoluciona</h1></Card.Title>
          <Card.Text>
            <h3>En este gimnasio podrás hacer ejercicio y ver tu evolución igual a tu pokemon favorito </h3>
          </Card.Text>
        </Card.Body> 
      </Card>

      <Card className="infogym">
        <Card.Img variant="medium" src={M2} />
        <Card.Body className="info1">
          <Card.Title><h1 className="tituloinfo">Ejercita</h1></Card.Title>
          <Card.Text>
          <h3>Dependiendo del peso que vayas aumentando y tu constancia</h3>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className="infogym">
        <Card.Img variant="bottom" src={M3} />
        <Card.Body className="info1">
          <Card.Title><h1 className="tituloinfo">Superate</h1></Card.Title>
          <Card.Text>
          <h3>Podrás convertirte en tu pokemon favorito, siendo fuerte y teniendo un estado física ideal</h3>
          </Card.Text>
        </Card.Body>
        
      </Card>
     
    </CardGroup>
  );
}

export default Cardservice;