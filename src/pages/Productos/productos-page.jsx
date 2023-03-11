import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import ProductsList from "../../components/product-list/products-list";
import { 
    getProductos,
    updateProducto,
 } from "../../services/products.service";

const ProductsPage = () => {
    
    const [Products, setProducts ] = useState([]);
    const [MensajeDeInformacion, setMensajeDeInformacion ] = useState('');
    const [openNotificacion, setOpenNotificacion] = useState(false);    
    
    const handleCloseNotification = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }

        setOpenNotificacion(false);
    }

    useEffect(() => {

        const obtenerProductos = async () => {
            const { productos } = await getProductos();
            setProducts(productos);
        }

        obtenerProductos();
    }, []);

    const handleModificarPrecio = (id) => {

        const index = Products.findIndex( (product) => product._id === id );
        
        if( index !== -1 ){

            const updatedProduct = {
                ...Products[index], 
                precio: 33,
            };
            
            updateProducto( id, updatedProduct ).then((response) => {
                const updatedProducts = [...Products];
                updatedProducts[index] = updatedProduct;

                setProducts( updatedProducts );
            })
            .catch((err)=>{
                const { data } = err.response;
                setMensajeDeInformacion( data.msg );
                setOpenNotificacion( true );
                console.error(data);
            });

        }

    }
    
    return(
    <>
        <h1>Products page</h1>
        <ProductsList 
            products = { Products }
            handleProductUpdate={ handleModificarPrecio } 
            />
        <Snackbar open={openNotificacion} autoHideDuration={ 6000 } onClose={ handleCloseNotification }>
            <Alert onClose={handleCloseNotification} severity="error" sx={{ width: '100%' }}>
                { MensajeDeInformacion }
            </Alert>
        </Snackbar>
    </>
    )
}

export default ProductsPage;