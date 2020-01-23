import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

//client_id e client_secret seriam para fazer a autenticacao na API e gerar a TOKEN
//mas nao entrara no MVP por causa do prazo. :(
export const api = {
    baseUrl: "https://api.github.com/users",
    // client_id: "c83a49f801e6291e9ee1",
    // client_secret: "7ccae496ed4d3fb835f3f9b4d4da6064cad3f1c3"
}

//Tentativa de criar uma metodo utilizando hooks para reaproveitamento de codigo e melhor organizacao
//porem como tive erros que nao consegui resolver acabei repetindo codigo para poder entregar o MVP a tempo.
// export const useGetApi = (urn, params) => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get(api.baseUrl + `${urn}` + params ? `/${params}` : null);
//             const data = [...response.data];
//             const error = response.error;
//             if (error)
//                 console.log(`Error: ${error}`)
//             else {
//                 console.log(data);
//                 setData(data);
//             }
//         };
//         fetchData();
//     }, [urn, params])

//     return data;
// }

const getUsers = () => {
   

    axios.get(api.baseUrl)
        .then(res => {
            console.log(res);
            return res;
            // setUsers({ usersList: [res.data] });
        }).catch(function (error) {
            console.log(`Error: ${error}`)
        })
        
}

export default getUsers;