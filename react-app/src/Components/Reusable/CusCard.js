import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CusCard = (props) => {
  return (
    <>
      <Card style={{ width: '18rem', height: '28rem' }}>
        <Card.Img style={{height: '40%'}} variant="top" src={props.image} alt={props.title} title={props.title} />
        <Card.Body style={{height: '60%'}}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{height: '60%'}}>
            {props.text}
          </Card.Text>
          <Button variant="primary">Learn More..</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CusCard;
