import React from 'react';
import ItemColor from './ItemColor';
import '../js/color';

const ListadoColores = ({colores, borrarColor}) => {

    const listado = colores.map(color => <ItemColor key={color.codigo} borrarColor={borrarColor} color={color}/>);

    return (
        <section className='mt-3 row'>
            {listado}
        </section>
    );
};

export default ListadoColores;