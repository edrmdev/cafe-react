import { instance } from "./auth.service";

const getProductos = async ( top = 15 ) => {
    const { data } = await instance.get( `/productos?limite=${top}`)

    if( ! data )
        throw new Error( 'No existe informacion de producto' );

    return data;
}

const getProductoByID = async ( id ) => {
    
    if( !id )
        throw new Error(`ID de producto invalido`);

    const { data } = await instance.get( `/productos/${ id }`);

    if( ! data )
        throw new Error( `No existe informacion del producto con el ID ${id}` );

    return data;
}

const updateProducto = async ( id, updatedProducto ) => {
    
    const { data } = await instance.put( `/productos/${id}`, updatedProducto );
    
    return data;
}

const removeProducto = async () => {

}

export {
    getProductos,
    getProductoByID,
    removeProducto,
    updateProducto,
}