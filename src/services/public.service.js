//Capa servicios externos (Clean Architecture)
const axios = require('axios');

export const login = () => {
    //new loadAbort();
    return { 
        call: axios.get('https://randomuser.me/api/')
    }
}