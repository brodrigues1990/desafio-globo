import { useState, useEffect } from 'react';
import axios from 'axios';

export const api = {
    baseUrl: "https://api.github.com",
    client_id: "c83a49f801e6291e9ee1",
    client_secret: "7ccae496ed4d3fb835f3f9b4d4da6064cad3f1c3"
}
console.log('entrou');

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

const useGetApi = (url,params)=>{
    const [data,setData] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await axios.get(`${url}/${params}`);
            const data = [...response.data];
            const error = response.error;
            if(error)
                console.log(`Error: ${error}`)
            else{
                console.log(data);
                setData(data);  
            }
        };
        fetchData();
    },[url,params])

    return data;
}


export default useGetApi;