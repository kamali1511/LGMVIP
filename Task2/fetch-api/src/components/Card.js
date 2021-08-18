import React from 'react';
import './card.css';
import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cardo = props => {
    return (
        //props or properties is used to access the properties which was passed using the card component in cardinfo.js
       <div id="card">
           <Container>
           <Card border="primary" style={{ width: '16rem' }} id="hovereffect">
            <Card.Img variant="top" className="pro-pic" alt="" src={`https://reqres.in/img/faces/${props.id}-image.jpg`} />
            <Card.Body>
                <Card.Title className="name">{props.name}{props.lname}</Card.Title>
                
                <Card.Text className='email'>{props.email}</Card.Text>
                </Card.Body>  
            </Card>
            <br></br>
            </Container>
            </div>
      
            
    )
}

export default Cardo;