import axios from "axios";


export const url= 'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=10';

export const fetchApi = async (url)=>{

    // const {data}= await axios.get((url),{

    //     headers: {
    //         'X-RapidAPI-Key': '7cd700c021msha6e16640ab4353ap1afb5djsn55c9b2a00dcd',
    //         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    //       }
    //     //   headers: {
    //     //     'X-RapidAPI-Key': 'f3a4de73b4msh8dfca2c2d945f63p15c7f4jsn9c9d126d4d9a',
    //     //     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    //     //   }
    // }
    // );
    // return data;
}


