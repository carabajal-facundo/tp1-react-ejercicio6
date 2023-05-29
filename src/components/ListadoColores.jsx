import React from 'react';
import ItemColor from './ItemColor';
import '../js/color';
import Color from '../js/color';

const ListadoColores = ({colores}) => {
    const listado = colores.map(color => <ItemColor color={color}/>);

    return (
        <section className='mt-3 row'>
            {listado}
        </section>
    );
};

export default ListadoColores;