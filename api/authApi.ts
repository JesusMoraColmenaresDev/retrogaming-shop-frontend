import api from "@/app/lib/api";
import { UserFormData } from "@/types";

export async function registerUser(data: UserFormData) {
  try {
    const response = await api.post('/register', data);
    return { message : response.data.message}
  } catch (error: any) {
    //esto es debido a que los errores de validacion de express vienen en un formato de arreglo 
    // mientras que el de la verificacion de email viene en un solo objeto error
    if (error.response.data.errors) {
        return {error: error.response.data.errors[0].msg};
    }else{
        return {error: error.response.data.error};
    }
  }
}

export async function loginUser(data: UserFormData) {
  try {
    const response = await api.post('/login', data);
    return response.data.token
  } catch (error: any) {
    //esto es debido a que los errores de validacion de express vienen en un formato de arreglo 
    // mientras que el de la verificacion de email viene en un solo objeto error
    if (error.response.data.errors) {
        return {error: error.response.data.errors[0].msg};
    }else{
        return {error: error.response.data.error};
    }
  }
}