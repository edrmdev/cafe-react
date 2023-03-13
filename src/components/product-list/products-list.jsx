import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import NotAvailableIcon from '@mui/icons-material/NoFood';
import './products-list.css';

const ProductsList = ( { 
        products, 
        editando,
        nuevoProducto,
        handleEditar,
        handleGuardar,
        handleCancelar,
        onProductChange
     } ) => {
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const updatedProduct = { ...nuevoProducto, [name]: value };
       onProductChange(updatedProduct);
    };

    return(
        <Grid container spacing={2}>
        {
            products.map((product) => (
                <Grid item xs={12} md={4} lg={3} key={product._id} >
                    <Card 
                        sx={{ 
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column',
                         }}
                         className="card"
                        >
                        <CardHeader 
                            title={
                                <>
                                    {( !product.disponible ) ? <NotAvailableIcon sx={ { color: 'red'}} />
                                        : null
                                    } 
                                    &nbsp;{product.nombre}
                                </> 
                            }
                            subHeader={`Precio: $${product.precio}`}
                            action={
                                <IconButton onClick={()=>handleEditar(product._id)}>
                                    <EditIcon />
                                </IconButton>
                            }
                            className="card-header"
                        />
                        <CardMedia
                            component="img"
                            sx={{ 
                                pt: '20%', 
                                padding: '1em 1em 0 1em',
                                objectFit: "contain"
                            }}
                            height="300"
                            image={ (product.img ) ? product.img : 'https://source.unsplash.com/random' }
                            title={ product.nombre }
                        >
                        </CardMedia>
                        <CardContent>
                            {
                                (editando && product._id === nuevoProducto._id) ? (
                                    <>
                                       <TextField
                                        name="nombre"
                                        label="Nombre"
                                        value={nuevoProducto.nombre}
                                        onChange={handleInputChange}
                                        fullWidth
                                        className="card-input"
                                        />
                                        <TextField
                                        name="precio"
                                        label="Precio"
                                        value={nuevoProducto.precio}
                                        onChange={handleInputChange}
                                        fullWidth
                                        className="card-input"
                                        />
                                    </>
                                )
                                : <>
                            <Typography variant="h4" sx={{ color: '#825634'}} >
                                ${ product.precio } MXN
                            </Typography>
                                </>
                            }
                        </CardContent>
                        <CardContent sx={{ flexGrow: 1 }}>
                            {
                                (editando && product._id === nuevoProducto._id) && (
                                    <CardActions>
                                        {/* <Button variant="contained" onClick={ () => handleProductUpdate(product._id) } sx={{ backgroundColor: '#212121' }}>Modificar</Button> */}
                                        <Button 
                                            variant="contained" 
                                            onClick={() => handleGuardar(product._id)}
                                            className="btn-primary"
                                        >
                                            <SaveIcon />
                                            Guardar
                                        </Button>
                                        <Button 
                                            variant="contained" 
                                            onClick={handleCancelar}
                                            className="btn-cancel"
                                            >
                                            <CancelIcon />
                                            Cancelar
                                        </Button>
                                    </CardActions>
                                )
                            }
                            {/* */}
                        </CardContent>
                    </Card>
                </Grid>
            ))
        }
    </Grid>
    );
}


export default ProductsList;