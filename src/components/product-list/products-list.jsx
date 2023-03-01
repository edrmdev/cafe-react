import { useState, useEffect } from 'react';
import { getProducts } from '../../services/public.service';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ProductsList = ( ) => {
    const [productos, setProductos ] = useState([]);
    const getProductsDataFromAPI = async () => {
        const { productos } = await getProducts(10); 
        setProductos(productos);
    }

    useEffect( () => {
        getProductsDataFromAPI();
    }, []);

    return(
        <Container sx={{ py: 0 }} maxWidth="lg">
        <Grid container spacing = {2}>
        {
        (productos.length > 0 ) ? 
            productos.map((item, idx) => (
                <Grid item xs={12} md={4} lg={4} key={idx}>
                    <Card 
                        key={item.nombre}
                        sx={{ 
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column',
                         }}
                        id={idx}
                        >
                        <CardMedia
                            component="img"
                            sx={{ 
                                pt: '20%', 
                                padding: '1em 1em 0 1em',
                                objectFit: "contain"
                            }}
                            height="300"
                            image={ (item.img ) ? item.img : 'https://source.unsplash.com/random' }
                            title={ item.nombre }
                        >
                        </CardMedia>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                { item.nombre } 
                            </Typography>
                            <Typography sx={{ color: '#825634'}} >
                                ${ item.precio } MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))
            : <h4>No Products Available</h4>
        }
    </Grid>
    </Container>
    );
}


export default ProductsList;