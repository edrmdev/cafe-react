import axios from 'axios';

const instance = new axios.create({
    baseURL: 'http://localhost:8080/api/',
});

const setAuthorizationToken = (token) => {
    
    if( token ) {
        instance.defaults.headers.common['x-token'] = `${token}`;
    }
    else{
        delete instance.defaults.headers.common['x-token'];
    }
}


const authUser = async (email, password) => {
    
    const payload = {
        correo: email,
        password
    };
    
    try{
        
        const { data } = await instance.post( `/auth/login`, payload);
        const { msg, token, usuario } = data;
        
        if( !token )
            throw new Error('Acceso invalido');

        localStorage.setItem('usuario', JSON.stringify(usuario));
        
        return {
            usuario,
            token,
            msg
        };
    }
    catch(err){
        console.log(err);
        throw new Error('Ha ocurrido un error al autenticar el usuario');
    }
}

export { instance, setAuthorizationToken, authUser };