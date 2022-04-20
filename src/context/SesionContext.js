import { createContext, useState } from "react";
import { post } from '../utils/httpClient';
export const SesionContext = createContext();

export const SesionProvider = ({children}) => {
    const [token, setToken] = useState(null)

    const getToken = async () => {
        if(token){
            return token;
        }else{
            const body = {
                email: "dev@udea.edu.co",
                password: "Password11*"
              }
            const response = await  post("http://34.136.10.174:5005/api/login", body);
            setToken(`Bearer ${response.accessToken}`)
            return `Bearer ${response.accessToken}`;
        }
    }

    return(
        <SesionContext.Provider value={{
            getToken
        }}>
            {children}
        </SesionContext.Provider>
    )
}