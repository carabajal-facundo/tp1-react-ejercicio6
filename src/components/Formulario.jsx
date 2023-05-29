import { Button, Form } from 'react-bootstrap';
import ListadoColores from './ListadoColores';
import { useState } from 'react';
import Color from '../js/color';


const Formulario = () => {
    const [colores, setColores] = useState([]);

    const [nombre, setNombre] = useState('');
    const [codigo, setCodigo] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        let color = new Color(nombre,codigo);
        setColores([...colores,color]);
        setNombre('');
        setCodigo('');
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="tarea">
                <Form.Control type='text' placeholder='Ingrese aqui el nombre del color' 
                    onChange={(e)=>{setNombre(e.target.value)}} value={nombre}/>
                <Form.Control type='text' placeholder='Ingrese aqui el codigo del color en hexadecimal' 
                    onChange={(e)=>{setCodigo(e.target.value)}} value={codigo}/>
                <Button variant='success' type='submit'>Ingresar</Button>
            </Form.Group>
        </Form>
        <ListadoColores colores={colores}></ListadoColores>
        </>
    );
};

export default Formulario;