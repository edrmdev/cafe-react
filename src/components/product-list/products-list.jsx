import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

const ProductsList = ( { products, handleProductUpdate } ) => {
 
    return(
        <Grid container spacing={2}>
        {
            products.map((product) => (
                <Grid item xs={12} md={4} lg={3} key={product._id}>
                    <Card 
                        sx={{ 
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column',
                         }}
                        >
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
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                { product.nombre } 
                            </Typography>
                            <Typography sx={{ color: '#825634'}} >
                                ${ product.precio } MXN
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" onClick={ () => handleProductUpdate(product._id) } sx={{ backgroundColor: '#212121' }}>Modificar</Button>
                            <Button variant="contained" sx={{ backgroundColor: '#880808'}}>Eliminar</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))
        }
    </Grid>
    );
}


export default ProductsList;