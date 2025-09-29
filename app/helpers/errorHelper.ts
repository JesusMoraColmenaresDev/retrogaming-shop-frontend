export function getApiErrorCode(error: any): string {
  if (error?.response?.data?.errors) {
    // express-validator: cada error tiene un campo 'code'
    return error.response.data.errors[0].msg.code;
  } else if (error?.response?.data?.code) {
    // errores personalizados: el campo es 'code'
    return error.response.data.code;
  }
  return "UNKNOWN_ERROR";
}