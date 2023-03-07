import axios from "axios";
const url = `http://localhost:8080/api`;

const getProductos = async ( top = 5 ) => {
    const { data } = await axios.get( `${ url }/productos?limite=${top}`)

    if( ! data )
        throw new Error( 'No existe informacion de producto' );

    return data;
}

const getProductoByID = async ( id ) => {
    
    if( !id )
        throw new Error(`ID de producto invalido`);

    const { data } = await axios.get( `${ url }/productos/${ id }`);

    if( ! data )
        throw new Error( `No existe informacion del producto con el ID ${id}` );
}

const removeProducto = async () => {

}

const updateProducto = async () => {

}

export {
    getProductos,
    getProductoByID,
    removeProducto,
    updateProducto,
}