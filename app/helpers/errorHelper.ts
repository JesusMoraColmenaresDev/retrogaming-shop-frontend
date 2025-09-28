export function getApiErrorMessage(error: any): string {
  if (error?.response?.data?.errors) {
    return error.response.data.errors[0].msg;
  } else if (error?.response?.data?.error) {
    return error.response.data.error;
  }
  return "Error desconocido";
}