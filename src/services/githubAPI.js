import axios from 'axios';

//client_id e client_secret seriam para fazer a autenticacao na API e gerar a TOKEN
//mas nao entrara no MVP por causa do prazo. :(
export const api = axios.create({
    baseURL: "https://api.github.com/",
    // client_id: "c83a49f801e6291e9ee1",
    // client_secret: "7ccae496ed4d3fb835f3f9b4d4da6064cad3f1c3"
});

export default api;