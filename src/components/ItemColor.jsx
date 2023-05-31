import React from 'react';
import {Button, Card} from 'react-bootstrap';
import '../js/color'
import Color from '../js/color';

const ItemColor = ({color, borrarColor}) => {
    const estilo = {
        background: color.codigo,
        whidth: '100%',
        height: '100px'
    };
    return (
        <>
        <Card className='text-center col-5 m-2'>
            <Card.Header>
                <h2>{color.nombre}</h2>
            </Card.Header>
            <Card.Body>
                <div style={estilo}/>
            </Card.Body>
            <Card.Footer>
                <Button onClick={()=>borrarColor(color)} variant='danger'>Borrar</Button>
            </Card.Footer>
        </Card>
        </>
    );
};

export default ItemColor;