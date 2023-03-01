//Capa servicios externos (Clean Architecture)
import axios from 'axios';
const url = `http://localhost:8080/api`;

export const login = () => {
    //new loadAbort();
    return { 
        call: axios.get('https://randomuser.me/api/')
    }
}

export const getProducts = async (cantidad = 5) => {
    
    const { data } = await axios.get( `${ url }/productos?limite=${cantidad}`)

    if( ! data )
        throw new Error( 'No existe informacion de producto' );

    return data;
};