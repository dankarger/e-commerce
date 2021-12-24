import axios from "axios";

export const axiosApi = axios.create({ baseURL: 'https://61c2f2dc9cfb8f0017a3e7c8.mockapi.io', });
// const API='https://61c2f2dc9cfb8f0017a3e7c8.mockapi.io/shoes/'


export const getDataBase= async (database)=>{
    try {
        const data =   axiosApi.get(`/${database}`)
        return await data

    }catch (err){
        console.log(err)
    }
}


export const findProduct= async (id, database)=>{
    let selectedProduct;
    await axiosApi.get(`/${database}/${id}`)
        .then(res=>{selectedProduct=res})
    return selectedProduct

}
