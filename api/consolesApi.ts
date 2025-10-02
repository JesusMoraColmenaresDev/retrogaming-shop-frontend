import api from '../app/lib/api';
import { ConsolesPaginatedResponseSchema, ConsolesPaginatedResponse } from '../types/consoles';

export async function getAllConsoles(page: number = 1): Promise<ConsolesPaginatedResponse> {
  const response = await api.get(`/consoles?page=${page}`);
  console.log(response);
  return ConsolesPaginatedResponseSchema.parse(response.data);
}
