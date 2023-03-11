import { 
    Alert,
    Button, 
    Card, 
    CardContent, 
    CardMedia, 
    Container, 
    FormLabel, 
    Grid,
    TextField,
    Typography
 } from "@mui/material"; 
import { useEffect, useState } from "react";
import { authUser, setAuthorizationToken } from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ErrorDescription, setErrorDescription] = useState(""); 
    let navigate = useNavigate();

    const handleSendData = async () => {
        try{            
            const { usuario, token } = await authUser(Email, Password);
            
            if( !token ){

                setErrorDescription( 'Acceso no autorizado' );
                throw new Error('Acceso no autorizado');
            }

            setAuthorizationToken( token );
            
            navigate('/productos');
        }
        catch(err){

            console.log(err);
            setErrorDescription( 'Acceso no autorizado' );
        }
        
    }

    useEffect(() => {

        const token = localStorage.getItem('token');
        if( token )
            navigate( '/' );
    }, [])

    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia>
            </CardMedia>
                <CardContent>
                    <Typography>
                        Inicia Sesion
                    </Typography>
                    <form onSubmit={handleSendData}>
                        <TextField 
                            label="Email" 
                            id="txtEmail" 
                            onChange={(e)=> setEmail(e.currentTarget.value)} 
                            placeholder="Ingrese Correo"/>
                        <TextField 
                            label="Password" 
                            id="txtPassword" 
                            type="password" 
                            onChange={(e) => setPassword(e.currentTarget.value)} 
                            placeholder="Ingrese contrase;a" />
                        <Button role="button" onClick={handleSendData} variant="contained">
                            Ingresar
                        </Button>
                    </form>
                    { ( ErrorDescription) ? 
                            <Alert severity="error">{ ErrorDescription }</Alert>
                        : null
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default LoginPage;