const axios = require("axios")

export const get = async (url, params) =>{
    try{
        const response = await axios.get(url, params);
        if(response && response.data){
            return response.data.data
        }
    }catch (error){
        console.log(JSON.stringify(error))
    }
}

export const post = async(url, body, config) =>{
    try{
        const response = await axios.post(url, body, config);
        if(response && response.data){ 
            return response.data.data
        }
    }catch (error){
        console.log(JSON.stringify(error))
    }
}