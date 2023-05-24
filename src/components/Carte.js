import React from 'react';
import Card from 'react-bootstrap/Card';

const Carte = ({ props }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className='mt-5'>
                <Card.Img variant="top" src={props.flags.svg} />
                <Card.Body>
                    <Card.Title >{props.capital} </Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Carte;