import { 
    Alert,
    Container, 
    Grid, 
    Snackbar
 } from "@mui/material";
import { useEffect, useState } from "react";
import ProductsList from "../../components/product-list/products-list";
import { 
    getProductos,
    updateProducto,
 } from "../../services/products.service";
import './productos-page.css';
const ProductsPage = () => {
    
    const [Products, setProducts ] = useState([]);
    const [MensajeDeInformacion, setMensajeDeInformacion ] = useState('');
    const [openNotificacion, setOpenNotificacion] = useState(false);    
    const [ProductoAModificar, setProductoAModificar] = useState('');
    const [editando, setEditando] = useState(false);
    
    useEffect(() => {
        
        const obtenerProductos = async () => {
            const { productos } = await getProductos();
            setProducts(productos);
        }

        obtenerProductos();
    }, []);

    const handleCloseNotification = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }

        setOpenNotificacion(false);
    }


    const handleEditar = (id) => {
      const index = Products.findIndex( product => product._id === id );
      const ProductoAEditar = Products[index];

      setProductoAModificar( ProductoAEditar );
      setEditando(true);
    };
  
    const handleGuardar = (id) => {
        setEditando(false);
        const index = Products.findIndex( (product) => product._id === id );
    
        if( index !== -1 ){
            
            updateProducto( id, ProductoAModificar ).then((response) => {
                
                const updatedProducts = [...Products];
                updatedProducts[index] = ProductoAModificar;
                setProducts( updatedProducts );
            })
            .catch((err)=>{
                const { data } = err.response;
                setMensajeDeInformacion( data.msg );
                setOpenNotificacion( true );
                console.error(data);
            });
        }
    };
  
    const handleCancelar = () => {
      setEditando(false);
      setProductoAModificar('');
    };

    const handleProductChange = (updatedProduct) => {

        setProductoAModificar(updatedProduct); 
    }

    
    return(
    <>
        <h1 className="titulo">Products</h1>
        <Container>

            <Grid container spacing={2}>
                <Grid item md={8} sm={12} lg={12}>
                <ProductsList 
                    products = { Products }
                    handleEditar={ handleEditar }
                    handleGuardar={ handleGuardar}
                    handleCancelar={ handleCancelar }
                    nuevoProducto={ProductoAModificar}
                    onProductChange={handleProductChange}
                    editando={editando}
                    />
                </Grid>
            </Grid>
        </Container>
        <Snackbar 
            open={openNotificacion} 
            autoHideDuration={ 6000 } 
            onClose={ handleCloseNotification }
        >
            <Alert 
                onClose={handleCloseNotification} 
                severity="error" 
                sx={{ width: '100%' }}
            >
                { MensajeDeInformacion }
            </Alert>
        </Snackbar>
    </>
    )
}

export default ProductsPage;