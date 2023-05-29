import React from 'react';
import {Card} from 'react-bootstrap';
import '../js/color'
import Color from '../js/color';

const ItemColor = ({color}) => {
    const estilo = {
        background: color.codigo,
        whidth: '100%',
        height: '100px'
    };
    return (
        <>
        <Card className='text-center col-3 m-2'>
            <Card.Header>
                <h2>{color.nombre}</h2>
            </Card.Header>
            <Card.Body>
                <div style={estilo}/>
            </Card.Body>
        </Card>
        </>
    );
};

export default ItemColor;