import { getApiErrorCode } from "@/app/helpers/errorHelper";
import api from "@/app/lib/api";
import { UserFormData } from "@/types";

export async function registerUser(data: UserFormData) {
    try {
        const response = await api.post('/register', data);
        console.log(response);
        return response.data;
    } catch (error: any) {
        //esto es debido a que los errores de validacion de express vienen en un formato de arreglo 
        // mientras que el de la verificacion de email viene en un solo objeto error
        console.log(error);
        return  error;
    }
}

export async function loginUser(data: UserFormData) {
    try {
        const response = await api.post('/login', data);
        return { code: response.data.code, token: response.data.token };
    } catch (error: any) {
        //esto es debido a que los errores de validacion de express vienen en un formato de arreglo 
        // mientras que el de la verificacion de si el usuario existe o si la contraseña coincide,
        return { error: getApiErrorCode(error) };

    }
}